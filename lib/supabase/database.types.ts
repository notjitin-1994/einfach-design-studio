export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      consultations: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          project_type: string | null;
          description: string;
          source: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          project_type?: string | null;
          description: string;
          source?: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          project_type?: string | null;
          description?: string;
          source?: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          id: string;
          email: string;
          role: string;
          first_name: string | null;
          last_name: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          role?: string;
          first_name?: string | null;
          last_name?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          role?: string;
          first_name?: string | null;
          last_name?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      consultation_notes: {
        Row: {
          id: string;
          consultation_id: string;
          author_id: string;
          content: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          consultation_id: string;
          author_id: string;
          content: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          consultation_id?: string;
          author_id?: string;
          content?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "consultation_notes_consultation_id_fkey"
            columns: ["consultation_id"]
            isOneToOne: false
            referencedRelation: "consultations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consultation_notes_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ];
      };
      consultation_followups: {
        Row: {
          id: string;
          consultation_id: string;
          author_id: string;
          due_date: string;
          description: string | null;
          completed: boolean;
          completed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          consultation_id: string;
          author_id: string;
          due_date: string;
          description?: string | null;
          completed?: boolean;
          completed_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          consultation_id?: string;
          author_id?: string;
          due_date?: string;
          description?: string | null;
          completed?: boolean;
          completed_at?: string | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "consultation_followups_consultation_id_fkey"
            columns: ["consultation_id"]
            isOneToOne: false
            referencedRelation: "consultations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "consultation_followups_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ];
      };
      activity_log: {
        Row: {
          id: string;
          action: string;
          entity_type: string;
          entity_id: string;
          user_id: string | null;
          details: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          action: string;
          entity_type: string;
          entity_id: string;
          user_id?: string | null;
          details?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          action?: string;
          entity_type?: string;
          entity_id?: string;
          user_id?: string | null;
          details?: Json | null;
          created_at?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          id: string;
          slug: string;
          title: string;
          category: string;
          year: string;
          location: string;
          summary: string;
          hero_text: string | null;
          description: string | null;
          image_url: string | null;
          gallery_images: Json | null;
          tags: string[] | null;
          process_phases: Json | null;
          status: string;
          sort_order: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          category: string;
          year: string;
          location: string;
          summary: string;
          hero_text?: string | null;
          description?: string | null;
          image_url?: string | null;
          gallery_images?: Json | null;
          tags?: string[] | null;
          process_phases?: Json | null;
          status?: string;
          sort_order?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          category?: string;
          year?: string;
          location?: string;
          summary?: string;
          hero_text?: string | null;
          description?: string | null;
          image_url?: string | null;
          gallery_images?: Json | null;
          tags?: string[] | null;
          process_phases?: Json | null;
          status?: string;
          sort_order?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      services: {
        Row: {
          id: string;
          title: string;
          description: string;
          icon: string | null;
          details: string[] | null;
          sort_order: number | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          icon?: string | null;
          details?: string[] | null;
          sort_order?: number | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          icon?: string | null;
          details?: string[] | null;
          sort_order?: number | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in string]: {
        Row: Record<string, unknown>;
        Insert: Record<string, unknown>;
        Update: Record<string, unknown>;
        Relationships: [];
      };
    };
    Functions: {
      [_ in string]: {
        Args: Record<string, unknown> | never;
        Returns: unknown;
      };
    };
    Enums: {
      [_ in string]: string[];
    };
    CompositeTypes: {
      [_ in string]: Record<string, unknown>;
    };
  };
};
