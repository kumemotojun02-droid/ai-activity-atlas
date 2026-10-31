// Public demonstration graph. Every relationship is illustrative, not a verified live assignment.
export const nodes = {
 atlas:{label:'AI Activity\nAtlas',type:'atlas',description:'AI・プロジェクト・発信先を、同じ地図から見渡す。'},
 shopee:{label:'Shopee事業',type:'project',description:'各ショップの運営と制作をつなぐサンプル。'},
 revenue:{label:'AI収益実験',type:'project',description:'AIだけで収益を生む方法を探索・検証する活動。'},
 comic:{label:'漫画プロジェクト',type:'project',description:'制作する個体と、作品を発信する個体が協働する場所。'},
 lab:{label:'AI研究所',type:'project',description:'AI同士の実験・学習を、外への発信につなぐ場所。'},
 ideas:{label:'アイデア宝物庫',type:'project',description:'興味から生まれた種が、実験へとつながっていく場所。'},
 claude:{label:'Claude Code',type:'platform',description:'ここで動く活動と、その活動が属するプロジェクトを見渡す。'},
 chatgpt:{label:'ChatGPT',type:'platform',description:'構想・研究・活動の整理をつなぐ場所。'},
 codex:{label:'Codex',type:'platform',description:'制作と実装から、複数のプロジェクトにつながる場所。'},
 grok:{label:'Grok',type:'platform',description:'名前を持つBotたちと、それぞれの担当を見る。'},
 muse:{label:'Muse / Dots',type:'platform',description:'発信や継続的な活動に関わるAIのサンプル。'},
 star:{label:'スター',type:'agent',host:'grok',description:'漫画のX発信担当という仮配置。実際の担当は未確認。'},
 botb:{label:'Bot B',type:'agent',host:'grok',description:'漫画のThreads発信担当という仮配置。実際の担当は未確認。'},
 assassin:{label:'Xアサシン',type:'agent',host:'grok',description:'実験室のX発信担当という仮配置。実際の担当は未確認。'},
 labbot:{label:'研究発信Bot',type:'agent',host:'muse',description:'実験室のThreads発信担当という仮配置。'},
 hoz:{label:'Hoz',type:'agent',host:'chatgpt',description:'研究内容の整理と発信を担うという仮配置。'},
 shopthread:{label:'Shopee管理\nスレッド',type:'activity',host:'claude',description:'Claude Code内でショップ運営を扱う活動のサンプル。'},
 moneythread:{label:'収益探索\nスレッド',type:'activity',host:'claude',description:'Claude Code内で収益実験を扱う活動のサンプル。'},
 studythread:{label:'AI研究\nスレッド',type:'activity',host:'claude',description:'Claude Code内でAI研究所につながる活動のサンプル。'},
 drawing:{label:'漫画制作',type:'activity',host:'codex',description:'漫画を作り、発信担当へ受け渡す活動のサンプル。'},
 atlasbuild:{label:'Atlas開発',type:'activity',host:'codex',description:'この地図の設計と実装。アイデアを触れる形へ。'},
 spark:{label:'興味の種',type:'activity',host:'chatgpt',description:'まだプロジェクトになっていない関心の置き場所。'},
 x:{label:'X',type:'channel',description:'複数のBot・プロジェクトが共有する発信先。'},
 threads:{label:'Threads',type:'channel',description:'複数のBot・プロジェクトが共有する発信先。'},
 note:{label:'note',type:'channel',description:'研究や学習を記事として届ける発信先。'},
 my:{label:'MY雑貨店',type:'output',description:'ショップ運営のサンプル。'},
 tw:{label:'台湾Zakka',type:'output',description:'ショップ運営のサンプル。'},
 sg:{label:'SGタオル店',type:'output',description:'ショップ運営のサンプル。'}
};
export const edges = [
 ['comic','star','発信担当'],['comic','botb','発信担当'],['comic','drawing','制作'],['star','x','発信'],['botb','threads','発信'],
 ['lab','assassin','発信担当'],['lab','labbot','発信担当'],['lab','hoz','編集・整理'],['lab','studythread','研究'],['assassin','x','発信'],['labbot','threads','発信'],['hoz','note','発信'],
 ['shopee','shopthread','運営'],['shopthread','my','管理'],['shopthread','tw','管理'],['shopthread','sg','管理'],
 ['revenue','moneythread','探索'],['revenue','hoz','構想'],['ideas','spark','蓄積'],['ideas','atlasbuild','実践'],['spark','revenue','実験へ'],['spark','comic','実験へ']
];
for(const [id,n] of Object.entries(nodes))if(n.host)edges.push([n.host,id,'活動場所']);
export const types = {atlas:{name:'全体',color:'#c2b5ff'},project:{name:'プロジェクト',color:'#bba8ff'},platform:{name:'AI / 活動場所',color:'#86bfff'},agent:{name:'AI個体',color:'#72e1c4'},activity:{name:'活動',color:'#a0dfcb'},channel:{name:'発信先',color:'#ffc291'},output:{name:'ショップ',color:'#ffc291'}};
export const projects=['shopee','revenue','comic','lab','ideas'];
export const platforms=['claude','chatgpt','codex','grok','muse'];
