# LSG Digital - Marketing e Performance

![LSG Digital Logo](/public/lsglogo.jpeg)

## 📋 Sobre o Projeto

LSG Digital é uma plataforma especializada em engenharia de crescimento com tráfego pago, desenvolvida com Next.js 13 e TypeScript. Oferecemos soluções premium de marketing digital com foco em ROI e crescimento previsível.

## 🚀 Tecnologias

- [Next.js 13](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [Lucide Icons](https://lucide.dev/)

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/lsgdigital.git

# Entre no diretório
cd lsgdigital

# Instale as dependências
npm install

# Crie o arquivo de variáveis de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🔧 Configuração

### Variáveis de Ambiente

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
```

### Banco de Dados

A estrutura da tabela de diagnósticos no Supabase:

```sql
create table public.diagnosticos (
  id uuid not null default gen_random_uuid(),
  name text not null,
  email text null,
  phone text null,
  business text null,
  investment text null,
  message text null,
  created_at timestamp without time zone null default now(),
  constraint diagnosticos_pkey primary key (id)
);
```

## 📚 Estrutura do Projeto

```
lsgdigital/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── lib/
│   └── supabase/
├── public/
│   ├── clients/
│   └── icons/
└── types/
```

## 🎯 Funcionalidades

- Landing page responsiva
- Formulário de diagnóstico integrado com Supabase
- Carrossel de depoimentos em vídeo
- Seção de clientes com carousel automático
- Whatsapp button flutuante
- Sistema de navegação suave
- Otimização SEO

## 📱 Seções Principais

1. **Hero** - Apresentação principal
2. **Clientes** - Showcase de cases de sucesso
3. **Vídeo Depoimentos** - Testemunhos em vídeo
4. **Metodologia** - Método PRISMA™
5. **Diferenciais** - Vantagens competitivas
6. **Contato** - Formulário de diagnóstico

## 🔍 SEO

O projeto inclui:
- Meta tags otimizadas
- Structured Data (Schema.org)
- Open Graph tags
- Twitter Cards
- Sitemap XML
- Robots.txt

## 📈 Analytics e Tracking

- Google Tag Manager integrado
- Pixels de conversão
- Eventos personalizados

## 📞 Contato

- **Site**: [lsgdigital.com.br](https://lsgdigital.com.br)
- **Email**: comercial@lsgdigital.com.br
- **WhatsApp**: +55 19 98133-1191

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por [LSG Digital](https://lsgdigital.com.br) © 2024
