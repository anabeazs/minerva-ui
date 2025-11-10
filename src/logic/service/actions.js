import { useNavigate } from "react-router-dom";
import { connSupabase } from "./conn";


export async function loadUserData() {
   const { data: { session }, error: sessionError } = await connSupabase.auth.getSession();

   if (sessionError) {
      console.error("Erro ao buscar sessão:", sessionError);
      return;
   }

   // ==========================================================
   //  A "GUARDA" DE AUTENTICAÇÃO
   // ==========================================================
   if (!session) {
      alert("Você precisa estar logado para acessar esta página.");
      // window.location.href = "../login/index.html";
      return;
   }

   const user = session.user;

   const { data: profile, error: profileError } = await connSupabase
      .from("user_profile")
      .select("nome")
      .eq("id", user.id)
      .single();

   if (profileError) {
      console.error("Erro ao buscar perfil do usuário:", profileError.message);
      alert("Não foi possível carregar seu perfil.");
      return;
   }

   console.log("Sessão atual:", session);
   console.log("Usuário:", user);
   console.log("Perfil:", profile);


   if (!profile) throw new Error("Não tem usuário!")

   return { name: profile.nome }
}

export async function useHandleLogout() {
   const { error } = await connSupabase.auth.signOut();

   if (error) {
      console.error("Erro ao fazer logout:", error);
      return false
   }

   alert("Logout realizado com sucesso!");
   return true
}

export async function registerUser(email, password, users) {
   // 2. Tenta cadastrar o usuário no Auth (autenticação) do Supabase
   // O resto da sua lógica permanece igual...
   const { data, error } = await connSupabase.auth.signUp({
      email,
      password,
      options: {
         data: {
            display_name: users // Armazena o nome no metadata do usuário
         }
      }
   });
}