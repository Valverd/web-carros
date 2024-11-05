import Header from "../../components/header";
import Container from "../../components/container";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email("Insira um email válido.")
    .min(1, { message: "O campo email é obrigatório." }),
  password: z.string().min(1, { message: "O campo senha é obrigatório." }),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function onSubmit(data: FormData){
    console.log(data)
  }

  return (
    <>
      <Header />
      <Container>
        <div className="w-full h-full flex justify-center items-center flex-col">
          <Link to="/" className="mb-6 max-w-sm w-full">
            <img src={logo} className="w-full" />
          </Link>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white max-w-xl w-full rounded-lg p-6 shadow-personalized">
            <div className="mb-3">
              <Input
                type="text"
                placeholder="Digite seu e-mail..."
                name="email"
                error={errors.email?.message}
                register={register}
              />
            </div>
            <div className="mb-3">
              <Input
                type="password"
                placeholder="Digite sua senha..."
                name="password"
                error={errors.password?.message}
                register={register}
              />
            </div>

            <button>Acessar</button>
          </form>
        </div>
      </Container>
    </>
  );
}
