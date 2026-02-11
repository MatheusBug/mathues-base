import { Project, ServiceItem, SocialLink } from './types';
import { Layout, Search, MapPin, Palette, Phone, Linkedin, Instagram, Github, Mail } from 'lucide-react';

export const HERO_DATA = {
    name: "MATHEUS AMORIM",
    role: "Marketing Jurídico & Autoridade Digital",
    subtitle: "Websites profissionais e posicionamento no Google para Advogados que buscam autoridade, clientes qualificados e conformidade com a OAB.",
    ctaText: "Análise Gratuita de Presença Digital",
    ctaLink: "https://wa.link/pvhwp2",
    avatarUrl: "/avatar.jpg"
};

export const SERVICES_DATA: ServiceItem[] = [
    {
        title: "Presença Digital Jurídica",
        description: "Seu site é o cartão de visitas moderno. Desenvolvo plataformas institucionais seguras e elegantes, focadas em transmitir a solidez do seu escritório.",
        icon: Layout
    },
    {
        title: "Google Meu Negócio para Advogados",
        description: "SEO Local Estratégico. Faça seu escritório ser encontrado por quem procura advogados na sua cidade e região.",
        icon: MapPin
    },
    {
        title: "SEO Jurídico (Busca Orgânica)",
        description: "Seja encontrado no Google sem depender de anúncios. Estratégias de conteúdo e otimização para colocar seu escritório nas primeiras posições.",
        icon: Search
    },
    {
        title: "Identidade Visual para Advocacia",
        description: "Design sóbrio e profissional. Criação de marcas que respeitam a tradição jurídica e transmitem confiança imediata.",
        icon: Palette
    }
];

export const SOCIAL_LINKS: SocialLink[] = [
    { platform: "WhatsApp", url: "https://wa.link/pvhwp2", icon: Phone },
    { platform: "Email", url: "mailto:amorimsec@tuta.io", icon: Mail },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/matheus-amorim-35ba46201/", icon: Linkedin },
    { platform: "Instagram", url: "https://www.instagram.com/amorim.io/", icon: Instagram },
    { platform: "GitHub", url: "https://github.com/MatheusBug", icon: Github },
];

export const PORTFOLIO_CONTENT = {
    home: {
        title: "Projetos de Autoridade Profissional",
        description: "Ambientes digitais desenvolvidos sob medida para a advocacia e saúde. Foco total em sobriedade, clareza e conformidade ética.",
        cta: "Ver acervo selecionado"
    },
    allProjects: {
        title: "Acervo de Projetos Jurídicos e Profissionais",
        description: "Uma coleção de websites e identidades visuais criadas para escritórios de advocacia e profissionais liberais que exigem uma imagem de alta confiança.",
        categories: ["Todos", "Projetos Jurídicos", "Clínicas e Saúde", "Outros Projetos"]
    },
    compliance: "Todos os nossos projetos são desenvolvidos respeitando rigorosamente o Código de Ética e Disciplina da OAB (Provimento 205/2021). Priorizamos o marketing de conteúdo informativo e a sobriedade visual, evitando qualquer prática de mercantilização da advocacia."
};

export const PROJECTS_DATA: Project[] = [
    {
        id: "06",
        title: "MONTEIRO & ASSOCIADOS",
        client: "Monteiro & Associados",
        businessType: "Escritório de Advocacia",
        category: "Projetos Jurídicos",
        focus: "Autoridade e Tradição",
        description: "Website institucional sóbrio e autoritativo. Estrutura focada em apresentar as áreas de atuação com clareza e reforçar a credibilidade do corpo jurídico.",
        longDescription: "Este projeto foi planejado para refletir a solidez de um escritório tradicional. A arquitetura da informação facilita a jornada do cliente em busca de soluções jurídicas, transmitindo segurança desde o primeiro clique e respeitando todas as normas de publicidade da OAB.",
        tech: ["React", "Compliance OAB", "SEO Local"],
        imageUrl: "/monteiro-associados.webp",
        link: "https://site-monteiro-associados-2.pages.dev/",
        featured: true
    },
    {
        id: "04",
        title: "LUMINA ODONTOLOGIA",
        client: "Lumina Odontologia Premium",
        businessType: "Clínica de Alto Padrão",
        category: "Clínicas e Saúde",
        focus: "Imagem Premium",
        description: "Projeto focado no público de alta renda. Design minimalista e sofisticado para transmitir a excelência técnica e o conforto da clínica.",
        longDescription: "Desenvolvido para uma clínica que busca se diferenciar pela qualidade. O site utiliza uma estética limpa e moderna para comunicar valor e tecnologia, atraindo pacientes que buscam tratamentos premium.",
        tech: ["React", "Performance", "UX Premium"],
        imageUrl: "/lumina-full.webp",
        link: "https://site-lumanina-odontologia.pages.dev/",
        featured: true
    },
    {
        id: "07",
        title: "ANNY NUTRICIONISTA",
        client: "Anny Nutricionista",
        businessType: "Saúde Integrada",
        category: "Clínicas e Saúde",
        focus: "Abordagem Científica",
        description: "Website profissional para área da saúde. Foco em apresentar as especializações e metodologias de forma clara e educativa.",
        longDescription: "O objetivo deste projeto foi organizar o conhecimento técnico da profissional em uma plataforma acessível. A estrutura de conteúdo favorece a autoridade profissional através da educação do paciente.",
        tech: ["React", "Marketing de Conteúdo", "Blog"],
        imageUrl: "/anny-nutricionista.webp",
        link: "https://site-anny-nutricionista.pages.dev/",
        featured: true
    },
    {
        id: "05",
        title: "RICTOUR VIAGENS",
        client: "Rictour Turismo",
        businessType: "Serviços Executivos",
        category: "Outros Projetos",
        focus: "Logística Corporativa",
        description: "Plataforma de serviços com foco em agilidade corporativa. Apresentação clara de frota e serviços para tomadores de decisão.",
        longDescription: "Uma interface direta e funcional focada na facilitação de contratação de serviços. Prioriza a clareza das informações e a facilidade de contato para otimizar o tempo de clientes corporativos.",
        tech: ["WordPress", "SEO Local", "Performance"],
        imageUrl: "/rictour.webp",
        link: "https://rictour.com.br/",
        featured: false
    }
];
