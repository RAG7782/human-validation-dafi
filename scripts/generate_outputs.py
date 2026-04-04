#!/usr/bin/env python3
"""
Generate 9 outputs for the Human Validation DA/FI experiment.
3 domains × 3 conditions = 9 outputs.

Protocol controls:
- Model: claude-sonnet-4-6-20250514
- Temperature: 0.7
- Max tokens: 4096
- All outputs in Portuguese

Conditions:
- BL (Baseline): Direct prompt, no framework, no blueprint
- AD (Auto-DA): Model generates its own blueprint, then executes it
- HD (Human-DA): Model executes using human-crafted blueprint
"""

import anthropic
import os
import time
from pathlib import Path

client = anthropic.Anthropic()
MODEL = "claude-sonnet-4-6"
TEMPERATURE = 0.7
MAX_TOKENS = 8192

BASE_DIR = Path(__file__).parent.parent
CASES_DIR = BASE_DIR / "data" / "cases"
BLUEPRINTS_DIR = BASE_DIR / "data" / "blueprints"
OUTPUTS_DIR = BASE_DIR / "data" / "outputs"

DOMAINS = ["juridico", "tributario", "tecnico"]


def read_file(path):
    return path.read_text(encoding="utf-8")


def generate(system_prompt, user_prompt, label):
    """Call Claude API with controlled parameters."""
    print(f"  Generating {label}...")
    start = time.time()
    response = client.messages.create(
        model=MODEL,
        max_tokens=MAX_TOKENS,
        temperature=TEMPERATURE,
        system=system_prompt,
        messages=[{"role": "user", "content": user_prompt}],
    )
    elapsed = time.time() - start
    text = response.content[0].text
    tokens_in = response.usage.input_tokens
    tokens_out = response.usage.output_tokens
    print(f"    Done in {elapsed:.0f}s | {tokens_in} in / {tokens_out} out")
    return text


def generate_bl(domain, briefing):
    """Condition BL: Baseline — direct prompt, no framework, no blueprint."""
    system = "Voce e um profissional experiente. Responda em portugues brasileiro."
    user = f"""Com base no caso abaixo, elabore o documento solicitado.

{briefing}"""
    return generate(system, user, f"{domain}_BL")


def generate_ad(domain, briefing):
    """Condition AD: Auto-DA — model generates blueprint, then executes."""
    system = "Voce e um profissional experiente. Responda em portugues brasileiro."

    # Step 1: Generate blueprint
    print(f"  Step 1: Auto-generating blueprint for {domain}...")
    blueprint_prompt = f"""Voce vai elaborar um documento profissional sobre o caso abaixo.
Antes de escrever, crie um BLUEPRINT detalhado: defina a estrutura de secoes,
a prioridade de cada secao, os criterios de qualidade e o formato adequado
ao genero textual solicitado.

Caso:
{briefing}

Produza APENAS o blueprint (estrutura, secoes, criterios). NAO escreva o documento ainda."""

    auto_blueprint = generate(system, blueprint_prompt, f"{domain}_AD_blueprint")

    # Step 2: Execute the blueprint
    print(f"  Step 2: Executing auto-blueprint for {domain}...")
    exec_prompt = f"""Agora execute o blueprint que voce criou para produzir o documento completo.

CASO:
{briefing}

SEU BLUEPRINT:
{auto_blueprint}

Produza o documento completo seguindo rigorosamente o blueprint acima."""

    return generate(system, exec_prompt, f"{domain}_AD_output")


def generate_hd(domain, briefing, blueprint):
    """Condition HD: Human-DA — execute human-crafted blueprint."""
    system = """Voce e um profissional experiente. Responda em portugues brasileiro.
Voce recebera um caso e um BLUEPRINT detalhado criado por um especialista humano.
Siga o blueprint RIGOROSAMENTE: respeite a estrutura de secoes, as prioridades,
as diretivas de densidade e os invariantes de qualidade."""

    user = f"""Execute o blueprint abaixo para produzir o documento completo sobre o caso.

CASO:
{briefing}

BLUEPRINT DO ESPECIALISTA:
{blueprint}

Produza o documento completo seguindo rigorosamente o blueprint acima.
Respeite todas as invariantes de qualidade, diretivas de densidade e alocacoes de prioridade."""

    return generate(system, user, f"{domain}_HD")


def main():
    print("=" * 60)
    print("HUMAN VALIDATION — OUTPUT GENERATION")
    print(f"Model: {MODEL} | Temp: {TEMPERATURE} | Max: {MAX_TOKENS}")
    print("=" * 60)

    for domain in DOMAINS:
        print(f"\n{'='*40}")
        print(f"DOMAIN: {domain.upper()}")
        print(f"{'='*40}")

        briefing = read_file(CASES_DIR / f"{domain}_briefing.md")
        blueprint = read_file(BLUEPRINTS_DIR / f"{domain}_blueprint.md")

        # Generate BL
        bl_output = generate_bl(domain, briefing)
        (OUTPUTS_DIR / f"{domain}_bl.md").write_text(bl_output, encoding="utf-8")
        print(f"  Saved: {domain}_bl.md")

        time.sleep(2)  # Rate limiting

        # Generate AD
        ad_output = generate_ad(domain, briefing)
        (OUTPUTS_DIR / f"{domain}_ad.md").write_text(ad_output, encoding="utf-8")
        print(f"  Saved: {domain}_ad.md")

        time.sleep(2)

        # Generate HD
        hd_output = generate_hd(domain, briefing, blueprint)
        (OUTPUTS_DIR / f"{domain}_hd.md").write_text(hd_output, encoding="utf-8")
        print(f"  Saved: {domain}_hd.md")

        time.sleep(2)

    print("\n" + "=" * 60)
    print("ALL 9 OUTPUTS GENERATED SUCCESSFULLY")
    print("=" * 60)

    # Summary
    for domain in DOMAINS:
        for cond in ["bl", "ad", "hd"]:
            path = OUTPUTS_DIR / f"{domain}_{cond}.md"
            size = path.stat().st_size
            lines = len(path.read_text().split("\n"))
            print(f"  {domain}_{cond}.md: {lines} lines, {size:,} bytes")


if __name__ == "__main__":
    main()
