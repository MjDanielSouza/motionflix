// ===================================================================
// MOTIONFLIX INSIGHTS · Matérias, Artigos & Repositórios (Motion + IA)
// ===================================================================

const DEFAULT_INSIGHTS = [
  {
    id: "ins-007",
    title: "Adobe MAX 2026: O 'USB-C da IA' chega à Creative Cloud com MCP no After Effects, Premiere, Photoshop e Hub Multi-Modelo",
    slug: "adobe-max-2026-mcp-creative-cloud-after-effects",
    category: "Workflows & Ferramentas",
    badgeColor: "from-amber-500 via-orange-500 to-red-600",
    date: "11 de Novembro de 2026",
    readTime: "8 min de leitura",
    author: "Daniel Souza",
    authorAvatar: "assets/daniel_souza.jpg",
    authorInstagram: "https://www.instagram.com/7danielsouza/",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80",
    summary: "Dossiê completo do Adobe MAX 2026: a chegada do Model Context Protocol (MCP) nativo, o fim das gambiarras de scripts legados, o hub multi-modelo com Kling, Runway e Google no Firefly, e como rodar agentes de IA no After Effects hoje mesmo.",
    keyTakeaways: [
      "O MCP opera como o 'USB-C da IA': um protocolo universal que dá aos agentes de IA (Claude, Antigravity, Cursor) acesso direto à árvore de camadas, timecodes e keyframes do software.",
      "Abertura histórica do ecossistema: O Firefly Creative Studio passa a permitir alternar entre o Firefly Video nativo e modelos parceiros como Runway Gen-3, Kling AI, Luma e Google diretamente na timeline.",
      "Acesso imediato sem esperar o Beta oficial: Desenvolvedores e animadores já contam com repositórios open-source maduros no GitHub para controlar o After Effects e Photoshop estáveis via MCP hoje."
    ],
    contentHtml: `
      <p class="text-lg text-slate-300 leading-relaxed mb-6 font-medium">O <strong>Adobe MAX 2026</strong> em Miami Beach marcou a virada de chave mais profunda da história recente da Creative Cloud. Durante anos, a relação entre softwares tradicionais de criação e inteligências artificiais generativas se limitou a recursos isolados de nuvem e ferramentas experimentais. Desta vez, a Adobe atacou as duas maiores dores da indústria: a <strong>integração nativa de agentes via MCP (Model Context Protocol)</strong> e a <strong>abertura para modelos de terceiros (Kling, Runway, Google e Luma)</strong>.</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">🔌 O que é o MCP e por que ele é chamado de 'USB-C da IA'?</h3>
      <p class="text-slate-300 leading-relaxed mb-4">Para quem não programa, a forma mais clara de enxergar o <strong>Model Context Protocol (MCP)</strong> é pensar nele como um plugue universal. Até hoje, conectar uma inteligência artificial ao After Effects exigia verdadeiras "gambiarras": scripts arcaicos em ExtendScript (<code>.jsx</code>) criados nos anos 1990, painéis CEP legados que rodavam navegadores defasados ou pontes em Python e WebSockets locais que frequentemente perdiam a conexão e quebravam a cada atualização de versão.</p>
      <p class="text-slate-300 leading-relaxed mb-4">Com o MCP, tudo isso é substituído por um protocolo bidirecional e estruturado. A IA deixa de ser um "chat cego" que apenas cospe textos ou código que você precisa copiar e colar. O agente passa a <strong>enxergar a timeline em tempo real</strong>, inspecionar a hierarquia das camadas, ler os timecodes, avaliar curvas de interpolação e disparar ferramentas nativas diretamente dentro do arquivo aberto (<code>.aep</code>, <code>.prproj</code> ou <code>.psd</code>).</p>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">⚔️ O Abismo Técnico: Antes vs. Depois do MCP</h3>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-white/10 rounded-xl overflow-hidden bg-slate-900/60 text-sm">
          <thead>
            <tr class="bg-white/5 text-slate-200 border-b border-white/10">
              <th class="p-3 font-semibold">Aspecto</th>
              <th class="p-3 font-semibold">O Fluxo Antigo (Gambiarras)</th>
              <th class="p-3 font-semibold">O Fluxo com MCP Local</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-slate-300">
            <tr>
              <td class="p-3 font-medium text-slate-400">Comunicação</td>
              <td class="p-3 text-red-300/80">Scripts JSX frágeis, painéis CEP pesados ou pontes manuais de socket.</td>
              <td class="p-3 text-emerald-400">Protocolo JSON-RPC direto, leve e nativo suportado pela máquina.</td>
            </tr>
            <tr>
              <td class="p-3 font-medium text-slate-400">Visão da Cena</td>
              <td class="p-3 text-red-300/80">Cega: o usuário precisava digitar manualmente nomes de camadas e propriedades.</td>
              <td class="p-3 text-emerald-400">Contextual: o agente inspeciona nomes de layers, timecodes, parenting e expressões.</td>
            </tr>
            <tr>
              <td class="p-3 font-medium text-slate-400">Controle de Erro</td>
              <td class="p-3 text-red-300/80">Se o script travasse, o After Effects congelava ou corrompia o projeto.</td>
              <td class="p-3 text-emerald-400">Operações atômicas agrupadas em Undo Groups: um único <code>Ctrl+Z</code> reverte tudo.</td>
            </tr>
            <tr>
              <td class="p-3 font-medium text-slate-400">Feedback Visual</td>
              <td class="p-3 text-red-300/80">Nenhum. A IA não sabia se o resultado gráfico ficou esteticamente agradável.</td>
              <td class="p-3 text-emerald-400">Render de frame único via IPC: o agente "olha" para o frame gerado e faz ajustes finos.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">🚀 4 Casos Práticos de Impacto no Dia a Dia do Motion Designer</h3>
      <ol class="list-decimal list-inside space-y-4 text-slate-300 mb-6 bg-slate-900/50 p-6 rounded-xl border border-white/5">
        <li>
          <strong class="text-white">Versionamento em Lote Sem Desgaste:</strong>
          <p class="mt-1 pl-5 text-sm text-slate-400">Imagine receber uma planilha com 40 títulos, preços e paletas de cores para uma campanha de e-commerce. Em vez de duplicar 40 composições e alterar textos um a um, você comanda o agente: <em>"Gere 40 variações da comp principal usando os dados do CSV, alterando a cor do sólido de fundo para o HEX correspondente"</em>. O trabalho de horas é concluído em segundos.</p>
        </li>
        <li>
          <strong class="text-white">Cirurgia de Curvas no Graph Editor:</strong>
          <p class="mt-1 pl-5 text-sm text-slate-400">Ajustar curvas de velocidade manualmente em 15 camadas de escala e posição consome um tempo precioso. Com MCP, você diz: <em>"Aplique um ease-out com 85% de influência e 15% de ease-in em todas as camadas de texto"</em>. O agente ajusta os beziers matemáticos diretamente nas propriedades de interpolação.</p>
        </li>
        <li>
          <strong class="text-white">Diagnóstico e Correção de Expressões:</strong>
          <p class="mt-1 pl-5 text-sm text-slate-400">Quando uma expressão matemática de <code>linear()</code>, <code>wiggle()</code> ou indexação quebra na timeline, o agente faz o parsing da árvore sintática (AST), identifica a linha faltante ou o parêntese incorreto e regrava o código na camada sem travar o software.</p>
        </li>
        <li>
          <strong class="text-white">Sincronia Automática com Batidas de Áudio:</strong>
          <p class="mt-1 pl-5 text-sm text-slate-400">O servidor MCP pode acionar ferramentas de análise acústica que leem os picos de amplitude da faixa de áudio e criam marcadores de corte exatamente no frame da batida (kick/snare), acelerando o corte de clipes no ritmo da música.</p>
        </li>
      </ol>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">🌐 O Hub Multi-Modelo: Adeus ao Jardim Fechado da Adobe</h3>
      <p class="text-slate-300 leading-relaxed mb-4">Outro anúncio bombástico do MAX 2026 foi a postura da Adobe em relação à concorrência. Reconhecendo que nenhum modelo de IA domina todas as especialidades, o novo <strong>Firefly Creative Studio</strong> se transformou em um hub multi-modelo.</p>
      <p class="text-slate-300 leading-relaxed mb-4">Agora, diretamente dentro do painel do Premiere e do After Effects, o editor pode escolher qual motor utilizar para cada tarefa:</p>
      
      <ul class="list-disc list-inside space-y-2 text-slate-300 mb-6 bg-slate-900/60 p-5 rounded-xl border border-white/5 text-sm">
        <li><strong>Firefly Video Nativo:</strong> Especializado em segurança comercial (IP Safe), integração com banco Adobe Stock e a ferramenta <em>Generative Remove</em> (apaga microfones, pessoas e fios em clipes de até 10 segundos preservando granulação e luz).</li>
        <li><strong>Runway Gen-3 Alpha:</strong> Selecionável quando a necessidade envolve movimentações cinematográficas de câmera e controle fino por Motion Brush.</li>
        <li><strong>Kling AI:</strong> O modelo de difusão predileto para física corporal complexa, simulação realista de tecidos e consistência em planos longos.</li>
        <li><strong>Google (Veo) & Luma:</strong> Motores alternativos para renderização volumétrica e paisagens abertas integradas à timeline.</li>
      </ul>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">🎨 O Ecossistema MCP nos 4 Pilares da Creative Cloud</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-5 rounded-xl bg-slate-900/70 border border-amber-500/20">
          <h4 class="font-bold text-amber-400 mb-2">🎬 After Effects</h4>
          <p class="text-xs text-slate-300 leading-relaxed">Criação automatizada de shape layers, text animators, rigging básico, aplicação de efeitos visuais e manipulação de curvas de velocidade no Graph Editor.</p>
        </div>
        <div class="p-5 rounded-xl bg-slate-900/70 border border-orange-500/20">
          <h4 class="font-bold text-orange-400 mb-2">🎞️ Premiere Pro</h4>
          <p class="text-xs text-slate-300 leading-relaxed">Montagem de cortes brutos por comando de voz, organização inteligente de bins, sincronização multicâmera e uso da nova ferramenta <em>Generative Media</em> para SFX e soundscapes.</p>
        </div>
        <div class="p-5 rounded-xl bg-slate-900/70 border border-blue-500/20">
          <h4 class="font-bold text-blue-400 mb-2">🖼️ Photoshop</h4>
          <p class="text-xs text-slate-300 leading-relaxed">Edição não-destrutiva de arquivos PSD: o agente cria camadas de ajuste, máscaras de recorte, iluminação direcional (Generative Relight) sem nunca achatar o arquivo.</p>
        </div>
        <div class="p-5 rounded-xl bg-slate-900/70 border border-yellow-500/20">
          <h4 class="font-bold text-yellow-400 mb-2">📐 Illustrator</h4>
          <p class="text-xs text-slate-300 leading-relaxed">Manipulação programática de caminhos vetoriais (paths), alinhamento de grids matemáticos, tradução de pranchetas em dezenas de idiomas e exportação em lote.</p>
        </div>
      </div>

      <h3 class="text-xl font-bold text-white mt-8 mb-4">🛠️ Como Testar Hoje na Versão Estável (Sem Esperar o Beta Oficial)</h3>
      <p class="text-slate-300 leading-relaxed mb-4">A Adobe anunciou seus assistentes oficiais em <em>Private Beta</em>, mas você não precisa esperar a fila de espera. A comunidade de código aberto já disponibilizou servidores MCP funcionais que conversam diretamente com a versão estável comercial que você tem instalada no seu computador.</p>
      
      <p class="text-slate-300 leading-relaxed mb-4">Com ferramentas como o <strong>Claude Desktop, Cursor ou Antigravity</strong>, a configuração é feita adicionando o servidor local ao seu arquivo JSON de configuração:</p>

      <pre class="bg-black/70 p-4 rounded-xl border border-slate-800 text-xs text-orange-400 font-mono overflow-x-auto mb-6">
// Exemplo de configuração de MCP no Claude Desktop ou Antigravity:
{
  "mcpServers": {
    "after-effects": {
      "command": "npx",
      "args": ["-y", "@brandkickagency/aftereffects-mcp"]
    },
    "adobe-suite": {
      "command": "python",
      "args": ["-m", "adobe_mcp_server"]
    }
  }
}
      </pre>

      <div class="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 text-orange-200 my-6">
        <strong>💡 A Mudança de Papel:</strong> O motion designer não está sendo substituído; ele está sendo promovido. O trabalho braçal de caçar keyframes perdidos, converter formatos de tela e renomear dezenas de camadas passa para os agentes. O talento humano agora foca onde sempre deveria ter estado: na <strong>direção de arte, ritmo, narrativa visual e sensibilidade estética</strong>.
      </div>
    `,
    relatedLinks: [
      { title: "Adobe MAX 2026 Portal Oficial", url: "https://www.adobe.com/max.html" },
      { title: "GitHub · brandkickagency/aftereffects-mcp", url: "https://github.com/brandkickagency/aftereffects-mcp" },
      { title: "GitHub · TheLlamainator/after-effects-mcp", url: "https://github.com/TheLlamainator/after-effects-mcp" },
      { title: "GitHub · matrayu/adobe-mcp (Photoshop & Suite)", url: "https://github.com/matrayu/adobe-mcp" },
      { title: "GitHub · adobe/generator-app-remote-mcp-server-generic", url: "https://github.com/adobe/generator-app-remote-mcp-server-generic" }
    ],
    tags: ["Adobe MAX", "MCP", "After Effects", "Premiere Pro", "Photoshop", "Illustrator", "Runway", "Kling", "Automação", "Open Source"]
  },
  {
    id: "ins-001",
    title: "Kling AI vs Runway Gen-3: Como a IA Generativa está revolucionando comerciais de Motion Design",
    slug: "kling-vs-runway-gen3-motion-design",
    category: "Inteligência Artificial",
    badgeColor: "from-purple-500 to-indigo-600",
    date: "11 de Novembro de 2026",
    readTime: "4 min de leitura",
    author: "Motion Radar",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
    summary: "Análise comparativa das duas principais ferramentas de vídeo generativo aplicadas ao fluxo de estúdios: consistência de câmera, controle de iluminação volumétrica e interpolação de frames.",
    keyTakeaways: [
      "O Kling AI se destaca pela consistência de movimentos hiper-realistas de câmera e física corporal.",
      "Runway Gen-3 Alpha domina o controle de transições de câmera (zoom, pan, tilt) com motion brush.",
      "Workflows híbridos: gerar placas base com IA e finalizar tipografia/HUD no After Effects economizam até 60% do tempo de produção."
    ],
    contentHtml: `
      <p class="text-lg text-slate-300 leading-relaxed mb-6 font-medium">A transição entre o motion tradicional baseado puramente em keyframes e a geração procedural orientada por prompts atingiu seu ponto mais maduro. Grandes estúdios já não discutem <em>se</em> usarão IA, mas sim <em>em qual camada do pipeline</em> ela gera mais valor.</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">1. Consistência de Física e Dinâmica</h3>
      <p class="text-slate-300 leading-relaxed mb-4">Um dos maiores pesadelos no motion com IA era o "flickering" (cintilação) e a perda de consistência entre quadros consecutivos. O <strong>Kling AI</strong> trouxe um modelo de difusão temporal com atenção espacial estendida que mantém tecidos, reflexos metálicos e líquidos estáveis por mais de 10 segundos.</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">2. O Papel do Motion Designer no After Effects</h3>
      <p class="text-slate-300 leading-relaxed mb-4">A IA não substitui a direção de arte nem a tipografia cinética. O melhor resultado do mercado hoje nasce do fluxo:</p>
      <ul class="list-disc list-inside space-y-2 text-slate-300 mb-6 bg-slate-900/60 p-5 rounded-xl border border-white/5">
        <li><strong>Etapa 1:</strong> Geração de backgrounds volumétricos ou texturas abstratas com Runway ou Kling.</li>
        <li><strong>Etapa 2:</strong> Tracking 3D e extração de profundidade (Depth Map).</li>
        <li><strong>Etapa 3:</strong> Composição de texto, logos vetoriais e animações UI com controle milimétrico de curvas (Graph Editor).</li>
      </ul>
      
      <div class="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200 my-6">
        <strong>💡 Insight Prático:</strong> Ao solicitar gerações para motion, utilize prompts com termos técnicos de cinema como <em>"cinematic 24fps, shallow depth of field, anamorphic flare, smooth gimbal roll"</em> para facilitar a pós-produção.
      </div>
    `,
    relatedLinks: [
      { title: "RunwayML Research", url: "https://runwayml.com" },
      { title: "Kling AI Portal", url: "https://klingai.com" }
    ],
    tags: ["IA Generativa", "Runway", "Kling", "After Effects", "Composição"]
  },
  {
    id: "ins-002",
    title: "Remotion: Criando vídeos e animações de Motion através de código React e TypeScript",
    slug: "remotion-video-em-codigo-react",
    category: "Repositórios Open Source",
    badgeColor: "from-emerald-500 to-teal-600",
    date: "10 de Novembro de 2026",
    readTime: "5 min de leitura",
    author: "DevMotion",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    summary: "Como o framework open-source Remotion permite programar vídeos dinâmicos com TailwindCSS, Three.js e dados em tempo real sem abrir um software tradicional de edição.",
    keyTakeaways: [
      "Permite renderização em massa na nuvem (AWS Lambda) para vídeos hiperpersonalizados.",
      "Uso de CSS transitions, física de mola (spring animations) e componentes reutilizáveis.",
      "Perfeito para gráficos de finanças (estilo Spotify Wrapped), placares esportivos e dashboards interativos."
    ],
    contentHtml: `
      <p class="text-lg text-slate-300 leading-relaxed mb-6 font-medium">O projeto <strong>Remotion</strong> quebrou a barreira entre desenvolvimento web frontend e computação gráfica de vídeo. Em vez de exportar arquivos pesados manualmente, cada frame do vídeo é renderizado via Chromium headless.</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">Por que isso muda o jogo para produtoras?</h3>
      <p class="text-slate-300 leading-relaxed mb-4">Imagine criar 10.000 vinhetas personalizadas com o nome de cada usuário de um aplicativo SaaS. No After Effects com scripts tradicionais, isso levaria dias de renderização. Com o Remotion conectado a uma API e AWS Lambda, 10.000 vídeos são renderizados em menos de 10 minutos.</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">Código e Física de Movimento</h3>
      <p class="text-slate-300 leading-relaxed mb-4">O Remotion possui funções nativas como <code>spring()</code> e <code>interpolate()</code> que simulam a mesma suavidade do Graph Editor do After Effects:</p>
      
      <pre class="bg-black/70 p-4 rounded-xl border border-slate-800 text-xs text-emerald-400 font-mono overflow-x-auto mb-6">
const frame = useCurrentFrame();
const { fps } = useVideoConfig();

const scale = spring({
  frame,
  fps,
  config: { damping: 12, stiffness: 100 }
});
      </pre>
      
      <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 my-6">
        <strong>⚡ Repositório GitHub:</strong> O projeto é 100% open-source com mais de 20k estrelas no GitHub. Excelente para quem quer aprender motion programático.
      </div>
    `,
    relatedLinks: [
      { title: "GitHub · Remotion", url: "https://github.com/remotion-dev/remotion" },
      { title: "Documentação Oficial", url: "https://www.remotion.dev" }
    ],
    tags: ["Open Source", "React", "TypeScript", "Código", "Automação"]
  },
  {
    id: "ins-003",
    title: "A Revolução do 3D Web Interativo: Spline 3D + Shaders no Motion Design Moderno",
    slug: "spline-3d-shaders-motion-moderno",
    category: "Workflows & Ferramentas",
    badgeColor: "from-cyan-500 to-blue-600",
    date: "09 de Novembro de 2026",
    readTime: "3 min de leitura",
    author: "3D Lab",
    coverImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&auto=format&fit=crop&q=80",
    summary: "O fim das animações estáticas na web. Como designers estão trocando renderizações pesadas de Cinema 4D por modelos 3D leves em tempo real no navegador.",
    keyTakeaways: [
      "Spline permite exportar modelos interativos que reagem ao mouse, giroscópio e scroll.",
      "Peso de arquivo reduzido: cenas completas em menos de 1.5MB com iluminação dinâmica.",
      "Integração nativa com Webflow, Framer, React e Three.js sem necessidade de programar WebGL do zero."
    ],
    contentHtml: `
      <p class="text-lg text-slate-300 leading-relaxed mb-6 font-medium">As landing pages mais premiadas no Awwwards e FWA nos últimos meses abandonaram vídeos em loop de background. O novo padrão é o <strong>3D reativo em tempo real</strong>.</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">O que tornou o Spline tão popular?</h3>
      <p class="text-slate-300 leading-relaxed mb-4">Diferente do Blender ou Cinema 4D, onde você precisa esperar horas de render com Octane ou Cycles, o Spline renderiza com shaders nativos do navegador. Você cria materiais de vidro (glassmorphism), metal cromado e luzes volumétricas que rodam a 60fps no celular do usuário.</p>
      
      <div class="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 my-6">
        <strong>🎯 Dica de Estudo:</strong> Pratique criar interações em que o objeto 3D gira conforme o cursor do usuário se desloca pela tela. Isso gera uma retenção de atenção 3x maior em sites de produtos tech.
      </div>
    `,
    relatedLinks: [
      { title: "Spline 3D Official", url: "https://spline.design" },
      { title: "Comunidade & Exemplos", url: "https://app.spline.design/community" }
    ],
    tags: ["3D Web", "Spline", "ThreeJS", "WebGL", "Interatividade"]
  },
  {
    id: "ins-004",
    title: "O Retorno da Tipografia Suíça e Kinetic Type em Campanhas Digitais de 2026",
    slug: "tipografia-suica-kinetic-type-2026",
    category: "Mercado & Tendências",
    badgeColor: "from-amber-500 to-rose-600",
    date: "08 de Novembro de 2026",
    readTime: "4 min de leitura",
    author: "Editorial Motion",
    coverImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&auto=format&fit=crop&q=80",
    summary: "Grids rígidos, fontes neo-grotescas e contrastes brutais: por que o estilo minimalista internacional da Escola Suíça é a maior aposta visual de marcas como Apple e Nike.",
    keyTakeaways: [
      "Foco em clareza extrema e hierarquia visual sem poluição de efeitos artificiais.",
      "Uso de curvas exponenciais (easing 80-90% de velocidade) para dar impacto instantâneo a títulos.",
      "Máscaras tipográficas e revelações diagonais sincronizadas com batidas secas de sound design."
    ],
    contentHtml: `
      <p class="text-lg text-slate-300 leading-relaxed mb-6 font-medium">Em uma época saturada de renders caóticos com inteligência artificial, o olho humano busca descanso e ordem. É por isso que o <strong>Design Suíço (International Typographic Style)</strong> vive seu maior renascimento na história do motion graphics.</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">Os 3 Pilares da Tipografia Cinética Moderna:</h3>
      <ol class="list-decimal list-inside space-y-3 text-slate-300 mb-6 bg-slate-900/60 p-5 rounded-xl border border-white/5">
        <li><strong>Grid Matemático:</strong> O texto nunca está posicionado ao acaso; ele segue alinhamentos rígidos que só quebram quando uma transição intencional acontece.</li>
        <li><strong>Velocidade no Graph Editor:</strong> O movimento começa com uma aceleração explosiva e desacelera suavemente nos últimos 3 frames (o famoso <em>"snap & cushion"</em>).</li>
        <li><strong>Sound Design Concreto:</strong> Foleys secos (clicks analógicos, fita cassete, cortes de papel) ancoram a animação na realidade física.</li>
      </ol>
    `,
    relatedLinks: [
      { title: "Swiss Style In Motion (Referência)", url: "https://www.pinterest.com/search/pins/?q=swiss+graphic+design+motion" }
    ],
    tags: ["Tipografia", "Swiss Style", "Kinetic Type", "Graph Editor", "Minimalismo"]
  },
  {
    id: "ins-005",
    title: "Theatre.js: A biblioteca de animação JavaScript que traz a timeline do After Effects para o navegador",
    slug: "theatre-js-timeline-motion-no-navegador",
    category: "Repositórios Open Source",
    badgeColor: "from-blue-500 to-indigo-600",
    date: "07 de Novembro de 2026",
    readTime: "4 min de leitura",
    author: "DevMotion",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    summary: "Se você ama o fluxo visual do After Effects mas precisa animar elementos HTML, Three.js ou React, o Theatre.js é a ferramenta definitiva.",
    keyTakeaways: [
      "Interface gráfica completa no navegador para adicionar keyframes e ajustar curvas visuais.",
      "Exporta animações em JSON ultra-compacto para serem executadas de forma leve na web.",
      "Compatível com qualquer biblioteca 3D (Three.js, Babylon.js, React Three Fiber)."
    ],
    contentHtml: `
      <p class="text-lg text-slate-300 leading-relaxed mb-6 font-medium">Programar animações complexas puramente em código CSS ou JavaScript muitas vezes parece trabalhar vendado. O <strong>Theatre.js</strong> resolve isso inserindo uma interface completa com timeline, faixas de propriedades e curvas de interpolação diretamente na janela do seu navegador enquanto seu projeto roda.</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">Como funciona no fluxo do motion designer?</h3>
      <p class="text-slate-300 leading-relaxed mb-4">Você conecta qualquer objeto 3D ou elemento na tela a um projeto do Theatre.js. Em seguida, você aperta a barra de espaço para dar play, arrasta os keyframes e ajusta as tangentes das curvas exatamente como faria no After Effects. Ao finalizar, basta clicar em exportar e o código já está pronto para produção.</p>
    `,
    relatedLinks: [
      { title: "GitHub · Theatre.js", url: "https://github.com/theatre-js/theatre" },
      { title: "Site Oficial com Playground", url: "https://www.theatrejs.com" }
    ],
    tags: ["Open Source", "TheatreJS", "JavaScript", "Timeline", "WebGL"]
  },
  {
    id: "ins-006",
    title: "ComfyUI para Animadores: Construindo fluxos de IA controláveis sem loteria de prompts",
    slug: "comfyui-para-motion-designers",
    category: "Inteligência Artificial",
    badgeColor: "from-rose-500 to-amber-600",
    date: "06 de Novembro de 2026",
    readTime: "5 min de leitura",
    author: "AI Pipelines",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&auto=format&fit=crop&q=80",
    summary: "Por que artistas de computação gráfica estão adotando o ComfyUI baseado em nós para ter controle preciso de poses (ControlNet), luz e estilo visual.",
    keyTakeaways: [
      "Interface por nós (node-based) muito familiar para quem já usou Blender Geometry Nodes ou Cinema 4D Xpresso.",
      "Uso de ControlNet (OpenPose, Canny, Depth) para forçar a IA a respeitar a animação 3D que você já fez.",
      "Possibilidade de criar renders de estilo anime, stop-motion ou argila a partir de bonecos brutos (blockout)."
    ],
    contentHtml: `
      <p class="text-lg text-slate-300 leading-relaxed mb-6 font-medium">Quem trabalha com clientes reais não pode depender da sorte de digitar um prompt no Midjourney ou Runway e torcer para o personagem estar na pose certa. O <strong>ComfyUI</strong> transformou a IA em um software de precisão técnica.</p>
      
      <h3 class="text-xl font-bold text-white mt-8 mb-4">O Segredo: ControlNet + Depth Map</h3>
      <p class="text-slate-300 leading-relaxed mb-4">Você faz uma animação 3D bem simples no Blender (apenas cubos e esferas se movendo). Em seguida, passa o mapa de profundidade (Depth) para o ComfyUI através de ControlNet. A inteligência artificial preenche cada frame com texturas hiper-realistas de vidro, fumaça ou metal, sem nunca mudar o trajeto ou a velocidade da sua animação original.</p>
    `,
    relatedLinks: [
      { title: "GitHub · ComfyUI", url: "https://github.com/comfyanonymous/ComfyUI" }
    ],
    tags: ["IA", "ComfyUI", "ControlNet", "Blender", "Workflows"]
  }
];
