export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      clients: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          name: string
          phone: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          name: string
          phone?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      contract_forms: {
        Row: {
          address_cep: string
          address_city: string
          address_complement: string | null
          address_neighborhood: string
          address_number: string
          address_state: string
          address_street: string
          ads_objective: string | null
          ads_places: string | null
          ads_results: string | null
          agrees_with_terms: boolean
          cnpj: string
          company_address_cep: string
          company_address_city: string
          company_address_complement: string | null
          company_address_neighborhood: string
          company_address_number: string
          company_address_state: string
          company_address_street: string
          company_fantasy_name: string
          company_social_reason: string
          contract_months: string
          contracted_service: string
          cpf: string
          created_at: string
          current_business: string
          digital_revenue_12_months: string
          employee_count: string
          financial_email: string
          google_ads_monthly_investment: string | null
          id: string
          ideal_client: string
          invests_in_ads: boolean | null
          main_difficulties: string
          monthly_ads_investment: string | null
          monthly_revenue: string
          monthly_value: string
          partnership_success: string
          responsible_email: string
          responsible_name: string
          updated_at: string
          whatsapp: string
        }
        Insert: {
          address_cep: string
          address_city: string
          address_complement?: string | null
          address_neighborhood: string
          address_number: string
          address_state: string
          address_street: string
          ads_objective?: string | null
          ads_places?: string | null
          ads_results?: string | null
          agrees_with_terms?: boolean
          cnpj: string
          company_address_cep: string
          company_address_city: string
          company_address_complement?: string | null
          company_address_neighborhood: string
          company_address_number: string
          company_address_state: string
          company_address_street: string
          company_fantasy_name: string
          company_social_reason: string
          contract_months: string
          contracted_service: string
          cpf: string
          created_at?: string
          current_business: string
          digital_revenue_12_months: string
          employee_count: string
          financial_email: string
          google_ads_monthly_investment?: string | null
          id?: string
          ideal_client: string
          invests_in_ads?: boolean | null
          main_difficulties: string
          monthly_ads_investment?: string | null
          monthly_revenue: string
          monthly_value: string
          partnership_success: string
          responsible_email: string
          responsible_name: string
          updated_at?: string
          whatsapp: string
        }
        Update: {
          address_cep?: string
          address_city?: string
          address_complement?: string | null
          address_neighborhood?: string
          address_number?: string
          address_state?: string
          address_street?: string
          ads_objective?: string | null
          ads_places?: string | null
          ads_results?: string | null
          agrees_with_terms?: boolean
          cnpj?: string
          company_address_cep?: string
          company_address_city?: string
          company_address_complement?: string | null
          company_address_neighborhood?: string
          company_address_number?: string
          company_address_state?: string
          company_address_street?: string
          company_fantasy_name?: string
          company_social_reason?: string
          contract_months?: string
          contracted_service?: string
          cpf?: string
          created_at?: string
          current_business?: string
          digital_revenue_12_months?: string
          employee_count?: string
          financial_email?: string
          google_ads_monthly_investment?: string | null
          id?: string
          ideal_client?: string
          invests_in_ads?: boolean | null
          main_difficulties?: string
          monthly_ads_investment?: string | null
          monthly_revenue?: string
          monthly_value?: string
          partnership_success?: string
          responsible_email?: string
          responsible_name?: string
          updated_at?: string
          whatsapp?: string
        }
        Relationships: []
      }
      expenses: {
        Row: {
          amount: number
          category: string
          created_at: string
          description: string | null
          expense_date: string
          id: string
          project_id: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          category: string
          created_at?: string
          description?: string | null
          expense_date: string
          id?: string
          project_id?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string
          description?: string | null
          expense_date?: string
          id?: string
          project_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "expenses_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          full_name: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          full_name: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          full_name?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          budget: number
          client_id: string | null
          created_at: string
          end_date: string | null
          id: string
          monthly_value: number
          name: string
          service_type: string
          spent: number
          start_date: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          budget?: number
          client_id?: string | null
          created_at?: string
          end_date?: string | null
          id?: string
          monthly_value?: number
          name: string
          service_type: string
          spent?: number
          start_date?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          budget?: number
          client_id?: string | null
          created_at?: string
          end_date?: string | null
          id?: string
          monthly_value?: number
          name?: string
          service_type?: string
          spent?: number
          start_date?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      revenues: {
        Row: {
          amount: number
          client_id: string | null
          created_at: string
          description: string | null
          id: string
          payment_date: string
          payment_status: string | null
          project_id: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          client_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          payment_date: string
          payment_status?: string | null
          project_id?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          client_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          payment_date?: string
          payment_status?: string | null
          project_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "revenues_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "revenues_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      security_events: {
        Row: {
          created_at: string | null
          event_data: Json | null
          event_type: string
          id: string
          ip_address: unknown | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
