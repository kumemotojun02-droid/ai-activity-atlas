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

// Idea-vault examples: sources and possible next steps, not imported private notes.
types.idea={name:'アイデアの種',color:'#ffd48b'};
nodes.ideas.description='疑問も、実験のかけらも。まだ形にならない可能性を開く。';
nodes.spark.label='何気ない疑問';nodes.spark.type='idea';nodes.spark.description='「これって何だろう？」から始まる種。小さな違和感を、次の探索へ。';
Object.assign(nodes,{
 fragments:{label:'実験のかけら',type:'idea',description:'うまくいったことも、予想外の結果も。別の問いと出会うのを待つ種。'},
 interfaceidea:{label:'未来の\nインターフェイス',type:'idea',description:'文字で指示する前に、触って理解できる世界。このAtlasも、その実験の一つ。'},
 cultures:{label:'常識の違いを\n物語に',type:'idea',description:'何気ない文化の違いを、漫画や物語の入口にする。'},
 autonomous:{label:'AIだけで\n動く商売',type:'idea',description:'人間の手作業を前提にせず、探索から検証までつながる仕組みを考える。'}
});
edges.push(['ideas','fragments','結果から生まれる'],['ideas','interfaceidea','触って育てる'],['ideas','cultures','発想をつなぐ'],['ideas','autonomous','実験へ育てる'],['interfaceidea','atlasbuild','形にする'],['cultures','comic','物語へ'],['autonomous','revenue','検証へ']);

export const storeIds=['my','tw','sg','thtools','phtools','mytools','thshoes','myshoes','phshoes','sgzakka','thzakka','phzakka','mytowel','thtowel'];
const storeSamples={thtools:'TH工具店',phtools:'PH工具店',mytools:'MY工具店',thshoes:'THシューズ',myshoes:'MYシューズ',phshoes:'PHシューズ',sgzakka:'SG雑貨店',thzakka:'TH雑貨店',phzakka:'PH雑貨店',mytowel:'MYタオル店',thtowel:'THタオル店'};
for(const[id,label]of Object.entries(storeSamples)){nodes[id]={label,type:'output',description:'ショップの街の操作検証用の仮店舗。実際の店舗・稼働状況は未確認。'};edges.push(['shopthread',id,'管理']);}
nodes.shopee.description='14区画のショップ街。店をタップして、そこから活動へ。すべて仮配置。';

for(const id of storeIds)edges.push(['shopee',id,'店舗']);

// Illustrative business paths: shops are one part of the operation.
Object.assign(nodes,{
 listinghub:{label:'出品の流れ',type:'activity',description:'商品を見つけ、出品できる形へ整えて公開するまで。工程同士のつながりを辿る仮モデル。'},
 analysishub:{label:'分析と改善',type:'activity',description:'ショップの結果から問いを作り、改善と次の実験へつなぐ仮モデル。'},
 aiteam:{label:'担当AI',type:'activity',description:'Shopee事業に関わるAIと活動を見渡すための入口。担当は仮配置。'},
 sourcing:{label:'商品リサーチ',type:'activity',host:'chatgpt',description:'候補を見つけて、商品制作の入口へつなぐ活動のサンプル。'},
 preparation:{label:'画像・商品文\n制作',type:'activity',host:'codex',description:'画像・タイトル・説明・バリエーションを整える活動のサンプル。'},
 publishing:{label:'登録・最終\n確認',type:'activity',host:'claude',description:'登録内容と重量などを確認してショップへ届ける活動のサンプル。'},
 analysis:{label:'売上・利益\n分析',type:'activity',host:'chatgpt',description:'結果を読み、新しい問いを見つける活動のサンプル。'},
 improvement:{label:'改善実験',type:'activity',host:'claude',description:'分析から仮説を立て、変更を試して結果へ戻る活動のサンプル。'}
});
edges.push(['shopee','listinghub','出品'],['shopee','analysishub','改善'],['shopee','aiteam','担当'],['listinghub','sourcing','候補を探す'],['listinghub','preparation','整える'],['listinghub','publishing','届ける'],['sourcing','preparation','制作へ'],['preparation','publishing','確認へ'],['publishing','shopthread','運営へ'],['analysishub','analysis','結果を読む'],['analysishub','improvement','試す'],['analysis','improvement','仮説 ↔ 結果'],['analysis','fragments','種が生まれる'],['fragments','lab','研究へ'],['aiteam','claude','活動場所'],['aiteam','codex','制作'],['aiteam','chatgpt','構想・分析']);
for(const id of ['sourcing','preparation','publishing','analysis','improvement'])edges.push([nodes[id].host,id,'活動場所']);
nodes.shopee.description='ショップの街、出品の流れ、分析と改善、担当AI。事業を複数の入口から見渡す仮モデル。';

nodes.shoegroup={label:'シューズ店\n全体の連携',type:'project',description:'MY・PH・THのシューズ店に共通する活動を見渡す仮モデル。'};
nodes.shoecoord={label:'共通の商品\n表現づくり',type:'activity',host:'claude',description:'タイトル・画像・色サイズ構成の共通化を扱う活動の表示例。'};
for(const id of ['myshoes','phshoes','thshoes'])edges.push(['shoegroup',id,'ショップ間の連携']);
edges.push(['shoegroup','shoecoord','共通活動'],['claude','shoecoord','活動場所'],['shoecoord','shopthread','運営へ']);
