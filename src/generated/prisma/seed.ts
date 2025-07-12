// seeds/createAdmin.ts
import "dotenv/config";
import bcrypt from "bcrypt";
import { PrismaClient } from "../../generated/prisma"; // ajuste o caminho se diferente
const prisma = new PrismaClient();

async function main() {
  // 1) Garante o tipo ADMIN
  const tipoAdmin = await prisma.tiposUsuario.upsert({
    where: { nome: "ADMIN" },
    update: {
      descricao: "Administrador do sistema",
    },               // nada a atualizar
    create: {
      nome: "ADMIN",
      descricao: "Administrador do sistema",
    },
  });

  console.log("Tipo ADMIN OK (id:", tipoAdmin.id + ")");

  // 2) Dados do usuário admin vindos do .env ou fallback
  console.log("process.env.ADMIN_EMAIL", process.env.ADMIN_EMAIL);
  console.log("process.env.ADMIN_PASSWORD", process.env.ADMIN_PASSWORD);
  console.log("process.env.BCRYPT_SALT_ROUNDS", process.env.BCRYPT_SALT_ROUNDS);
  const email = process.env.ADMIN_EMAIL;
  const plainPassword = process.env.ADMIN_PASSWORD;

  // 3) Criptografa a senha
  console.log("plainPassword", plainPassword);
  const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS ?? 10);
  const hashedPassword = await bcrypt.hash(plainPassword ?? "admin123", saltRounds);

  // 4) Cria ou atualiza o usuário‑admin
  const adminUser = await prisma.user.upsert({
    where: { email },                 // chave única (email)
    update: {
      password: hashedPassword,       // atualiza senha se rodar de novo
      ativado: true,
      tipoUsuarioId: tipoAdmin.id,
    },
    create: {
      nome: "Admin",
      email: email ?? "admin@email.com",
      password: hashedPassword,
      ativado: true,
      tipoUsuarioId: tipoAdmin.id,
    },
    include: { tipoUsuario: true },
  });

  console.log("Usuário‑admin OK =>", {
    id: adminUser.id,
    nome: adminUser.nome,
    senha: adminUser.password,
    email: adminUser.email,
    tipo: adminUser.tipoUsuario?.nome,
    tipoId: adminUser.tipoUsuario?.id,
    createdAt: adminUser.createdAt,
    updatedAt: adminUser.updatedAt,
    ativado: adminUser.ativado,
  });
  //criar genero
  const genero = await prisma.genero.upsert({
    where: { id: "1" },
    update: {
      nome: "Ação",
    },
    create: {
      nome: "Ação", 
      animes: {
        create: [],
      },
      mangas: {
        create: [],
      },
    },
  });
  console.log("Genero criado OK =>", genero.id);
  //criar genero
  const generoAventura = await prisma.genero.upsert({
    where: { id: "2" },
    update: {
      nome: "Aventura",
    },
    create: {
      nome: "Aventura",
      animes: {
        create: [],
      },
      mangas: {
        create: [],
      },
    },
  });
  console.log("Genero criado OK =>", generoAventura.id);
  //criar genero
  const generoComedia = await prisma.genero.upsert({
    where: { id: "3" },
    update: {
      nome: "Comédia",
    },
    create: {
      nome: "Comédia",
      animes: {
        create: [],
      },
      mangas: {
        create: [],
      },
    },
  });
  console.log("Genero criado OK =>", generoComedia.id);
  //criar genero
  const generoDrama = await prisma.genero.upsert({
    where: { id: "4" },
    update: {
      nome: "Drama",
    },
    create: {
      nome: "Drama",
      animes: {
        create: [],
      },
      mangas: {
        create: [],
      },
    },
  });
  console.log("Genero criado OK =>", generoDrama.id);
  //criar genero
  const generoFantasia = await prisma.genero.upsert({
    where: { id: "5" },
    update: {
      nome: "Fantasia",
    },
    create: {
      nome: "Fantasia",
      animes: {
        create: [],
      },
      mangas: {
        create: [],
      },
    },
  });
  console.log("Genero criado OK =>", generoFantasia.id);
  //criar genero
  const generoFiccaoCientifica = await prisma.genero.upsert({
    where: { id: "6" },
    update: {
      nome: "Ficção Científica",
      animes: {
        create: [],
      },
      mangas: {
        create: [],
      },
    },
    create: {
      nome: "Ficção Científica",
      animes: {
        create: [],
      },
      mangas: {
        create: [],
      },
    },
  });
  console.log("Genero criado OK =>", generoFiccaoCientifica.id);
  //criar genero
  const generoMusical = await prisma.genero.upsert({
    where: { id: "7" },
    update: {
      nome: "Musical",
    },
    create: {
      nome: "Musical",
      animes: {
        create: [],
      },
      mangas: {
        create: [],
      },
    },
  });
  console.log("Genero criado OK =>", generoMusical.id);
  //criar genero
  const generoRomance = await prisma.genero.upsert({
    where: { id: "8" },
    update: {
      nome: "Romance",
    },
    create: {
      nome: "Romance",
      animes: {
        create: [],
      },
      mangas: {
        create: [],
      },
    },
  });
  console.log("Genero criado OK =>", generoRomance.id);
  //criar genero
  const generoSuspense = await prisma.genero.upsert({
    where: { id: "9" },
    update: {
      nome: "Suspense",
    },
    create: {
      nome: "Suspense",
      animes: {
        create: [],
      },
      mangas: {
        create: [],
      },
    },
  });
  console.log("Genero criado OK =>", generoSuspense.id);
}
main()
  .catch((e) => {
    console.error("Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
