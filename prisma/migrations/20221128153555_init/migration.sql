-- CreateTable
CREATE TABLE "Squads" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "deletedAt" TIMESTAMP(0),

    CONSTRAINT "Squads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apontamentos" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "escopo" VARCHAR(20) NOT NULL,
    "squadsId" INTEGER NOT NULL,
    "impacto" VARCHAR(10) NOT NULL,
    "recomendacao" VARCHAR(255) NOT NULL,
    "cvss" VARCHAR(50) NOT NULL,
    "cvss_ponto" DOUBLE PRECISION NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "data_fechamento" TIMESTAMP(3) NOT NULL,
    "prioridade" VARCHAR(10) NOT NULL,
    "usersId" INTEGER NOT NULL,
    "ambiente" VARCHAR(10) NOT NULL,
    "apontamento_aberto" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(0),

    CONSTRAINT "Apontamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "deletedAt" TIMESTAMP(0),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SquadsToUsers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_senha_key" ON "Users"("senha");

-- CreateIndex
CREATE UNIQUE INDEX "_SquadsToUsers_AB_unique" ON "_SquadsToUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_SquadsToUsers_B_index" ON "_SquadsToUsers"("B");

-- AddForeignKey
ALTER TABLE "Apontamentos" ADD CONSTRAINT "Apontamentos_squadsId_fkey" FOREIGN KEY ("squadsId") REFERENCES "Squads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Apontamentos" ADD CONSTRAINT "Apontamentos_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SquadsToUsers" ADD CONSTRAINT "_SquadsToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Squads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SquadsToUsers" ADD CONSTRAINT "_SquadsToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
