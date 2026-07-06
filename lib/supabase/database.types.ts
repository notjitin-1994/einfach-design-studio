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
      rate_limits: {
        Row: {
          id: string;
          ip_hash: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          ip_hash: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          ip_hash?: string;
          created_at?: string;
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
