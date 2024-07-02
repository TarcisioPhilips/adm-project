import { api } from "@/lib/axios";

export interface SignInInBody {
  email: string;
}

export async function signIn({ email }: SignInInBody) {
  await api.post("/autenticate", { email });
}
