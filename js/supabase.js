// ============================================
// Supabase Client Configuration
// ============================================
// Replace these with your actual Supabase credentials

const SUPABASE_URL = 'https://tlrmcmmuqxyqsskjqrri.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRscm1jbW11cXh5cXNza2pxcnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNzA3MjgsImV4cCI6MjA5MDg0NjcyOH0.1YNw4i6kS9y_QD1owXprccraChwR5yfxE8xqQEaWTUc';

let _supabase = null;

function getSupabase() {
  if (!_supabase) {
    if (typeof window.supabase === 'undefined') {
      console.error('Supabase JS library not loaded');
      return null;
    }
    _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _supabase;
}

// ============================================
// Database Operations
// ============================================

const db = {
  // Register a new evaluator
  async registerEvaluator({ name, email, domain, qualification, yearsExperience }) {
    const sb = getSupabase();
    // Insert evaluator
    const { data: evaluator, error: evalError } = await sb
      .from('evaluators')
      .insert({
        name,
        email,
        domain,
        qualification,
        years_experience: yearsExperience
      })
      .select()
      .single();

    if (evalError) {
      if (evalError.code === '23505') {
        throw new Error('Este email ja esta cadastrado. Verifique sua caixa de entrada para o link de avaliacao.');
      }
      throw evalError;
    }

    // Generate randomization
    const conditions = ['bl', 'ad', 'hd'];
    const shuffled = conditions.sort(() => Math.random() - 0.5);

    const { error: randError } = await sb
      .from('randomizations')
      .insert({
        evaluator_id: evaluator.id,
        doc_order: shuffled
      });

    if (randError) throw randError;

    return evaluator;
  },

  // Get evaluator by access token
  async getEvaluator(token) {
    const sb = getSupabase();
    const { data, error } = await sb
      .from('evaluators')
      .select('*, randomizations(doc_order)')
      .eq('access_token', token)
      .single();

    if (error || !data) throw new Error('Token invalido ou expirado.');
    return data;
  },

  // Get existing evaluations for this evaluator
  async getEvaluations(evaluatorId) {
    const sb = getSupabase();
    const { data, error } = await sb
      .from('evaluations')
      .select('*')
      .eq('evaluator_id', evaluatorId)
      .order('created_at');

    if (error) throw error;
    return data || [];
  },

  // Save a single document evaluation
  async saveEvaluation({ evaluatorId, documentLabel, condition, scores }) {
    const sb = getSupabase();

    // Upsert: if evaluator already rated this doc, update
    const { data: existing } = await sb
      .from('evaluations')
      .select('id')
      .eq('evaluator_id', evaluatorId)
      .eq('document_label', documentLabel)
      .single();

    if (existing) {
      const { error } = await sb
        .from('evaluations')
        .update({
          c1_usability: scores.c1,
          c2_precision: scores.c2,
          c3_structure: scores.c3,
          c4_depth: scores.c4,
          c5_actionability: scores.c5,
          c6_substance_ratio: scores.c6
        })
        .eq('id', existing.id);
      if (error) throw error;
    } else {
      const { error } = await sb
        .from('evaluations')
        .insert({
          evaluator_id: evaluatorId,
          document_label: documentLabel,
          condition,
          c1_usability: scores.c1,
          c2_precision: scores.c2,
          c3_structure: scores.c3,
          c4_depth: scores.c4,
          c5_actionability: scores.c5,
          c6_substance_ratio: scores.c6
        });
      if (error) throw error;
    }
  },

  // Save qualitative responses
  async saveQualitative({ evaluatorId, preferredDoc, preferenceReason, aiDetectedDocs, aiDetectionReason, generalComments, timeSpentMinutes }) {
    const sb = getSupabase();
    const { error } = await sb
      .from('qualitative_responses')
      .insert({
        evaluator_id: evaluatorId,
        preferred_doc: preferredDoc,
        preference_reason: preferenceReason,
        ai_detected_docs: aiDetectedDocs,
        ai_detection_reason: aiDetectionReason,
        general_comments: generalComments,
        time_spent_minutes: timeSpentMinutes
      });
    if (error) throw error;
  },

  // Admin: get all data
  async getAllEvaluators() {
    const sb = getSupabase();
    const { data, error } = await sb
      .from('evaluators')
      .select('*, randomizations(doc_order), evaluations(*), qualitative_responses(*)')
      .order('created_at');
    if (error) throw error;
    return data || [];
  }
};
