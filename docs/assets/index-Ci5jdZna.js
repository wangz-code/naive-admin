var l=Object.defineProperty,n=Object.defineProperties,e=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,a=(n,e,u)=>e in n?l(n,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[e]=u;import{d as i,bt as c,o as r,c as p,w as h,g as d,h as o,av as m,p as b,b as y,L as g}from"./index-DARFfA1y.js";import{_ as v}from"./plugin-vueexport-helper-BCo6x5W8.js";const x={class:"article font-song chinese chinese-truegray"},f={class:"article__nav no-chinese"},w={open:""},L={class:"chinese-list-latin"},z={id:"intro"},_={class:"anchor"},k={id:"usage"},S={class:"anchor"},q={id:"examples"},C={class:"anchor"},O={id:"example-ancient"},j={class:"anchor"},P={id:"example-verse"},T={class:"anchor"},I={id:"example-annotation"},R={class:"anchor"},U={id:"example-columns"},D={class:"anchor"},E={open:""},H={id:"example-vertical"},A={class:"anchor"},B={open:""},F={id:"guidelines"},G={class:"anchor"},J={id:"ref-01"},K={id:"appendix"},M={class:"anchor"},N={id:"tags"},Q={class:"anchor"},V=i((W=((l,n)=>{for(var e in n||(n={}))s.call(n,e)&&a(l,e,n[e]);if(u)for(var e of u(n))t.call(n,e)&&a(l,e,n[e]);return l})({},{name:"TypographyPage"}),n(W,e({__name:"index",setup:l=>(l,n)=>{const e=g,u=c("anchor");return r(),p(e,null,{default:h((()=>[d("article",x,[n[43]||(n[43]=d("h1",{class:"article__title"},"中文网页字体排列方案",-1)),n[44]||(n[44]=d("blockquote",null,[o(" 这是一个旨在优化"),d("u",null,"中文网站"),o("或应用程序字体显示的项目。通过使用这个项目，您可以获得一个默认的字体排列方案，以确保在没有指定字体的情况下，页面中选择的字体尽可能符合"),d("u",null,"中文阅读"),o("的要求。这个项目的字体排列方案是基于"),d("u",null,"中文阅读体验"),o("的考虑，它优先选择在中文环境中广泛使用和受欢迎的字体，并根据字体支持的字形、符号以及跨平台支持来确定字体的优先级顺序。 ")],-1)),d("nav",f,[d("details",w,[n[11]||(n[11]=d("summary",null,"目录",-1)),d("ol",null,[d("li",null,[m((r(),b("a",null,n[0]||(n[0]=[o("介绍")]))),[[u,"#intro"]])]),d("li",null,[m((r(),b("a",null,n[1]||(n[1]=[o("使用方法")]))),[[u,"#usage"]])]),d("li",null,[m((r(),b("a",null,n[2]||(n[2]=[o("效果演示")]))),[[u,"#examples"]]),d("ul",null,[d("li",null,[m((r(),b("a",null,n[3]||(n[3]=[o("古文")]))),[[u,"#example-ancient"]])]),d("li",null,[m((r(),b("a",null,n[4]||(n[4]=[o("诗词")]))),[[u,"#example-verse"]])]),d("li",null,[m((r(),b("a",null,n[5]||(n[5]=[o("行间注")]))),[[u,"#example-annotation"]])]),d("li",null,[m((r(),b("a",null,n[6]||(n[6]=[o("多栏排版")]))),[[u,"#example-columns"]])]),d("li",null,[m((r(),b("a",null,n[7]||(n[7]=[o("竖排排版")]))),[[u,"#example-vertical"]])])])]),d("li",null,[m((r(),b("a",null,n[8]||(n[8]=[o("设计原则")]))),[[u,"#guidelines"]])]),d("li",null,[m((r(),b("a",null,n[9]||(n[9]=[o("附录")]))),[[u,"#appendix"]]),d("ol",L,[d("li",null,[m((r(),b("a",null,n[10]||(n[10]=[o("标签示例表")]))),[[u,"#tags"]])])])])])])]),d("h2",z,[n[13]||(n[13]=o("介绍")),m((r(),b("a",_,n[12]||(n[12]=[o("#")]))),[[u,"#intro"]])]),n[45]||(n[45]=d("p",null,[d("ruby",{class:"chinese-ruby--inline"},"unocss-preset-chinese"),d("ruby",{class:"chinese-ruby--inline"},[o("-typography"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"排版"),d("rp",null,")")]),o("是专为中文网页内容设计的排版样式增强。它基于通行的中文排版规范，可为网站的读者带来更好的内容阅读体验。它的主要特性有： ")],-1)),n[46]||(n[46]=d("ul",null,[d("li",null,"贴合网格的排版；"),d("li",null,"全标签样式美化；"),d("li",null,"预置古文、诗词样式；"),d("li",null,"预置多种排版样式（行间注、多栏、竖排等）；"),d("li",null,"多种预设字体族"),d("li",null,"简/繁体中文支持；"),d("li",null,"移动端支持；"),d("li",null,"……")],-1)),n[47]||(n[47]=d("p",null,"总之，用上就会变好看。",-1)),n[48]||(n[48]=d("hr",null,null,-1)),d("h2",k,[n[15]||(n[15]=o("使用方法")),m((r(),b("a",S,n[14]||(n[14]=[o("#")]))),[[u,"#usage"]])]),n[49]||(n[49]=d("p",null,[o("项目地址："),d("a",{href:"https://github.com/kirklin/unocss-preset-chinese"},"https://github.com/kirklin/unocss-preset-chinese"),o("，使用方法如下：")],-1)),n[50]||(n[50]=d("ol",null,[d("li",null,[o(" 在您的 UnoCss 配置文件中引入 unocss-preset-chinese 并将其添加到 presets 部分： "),d("pre",null,[d("code",null,'import presetChinese, { chineseTypography } from "unocss-preset-chinese";\n   export default defineConfig({\n     presets: [\n       presetUno(),\n       chineseTypography(),\n       presetChinese(),\n       // ...custom presets\n     ],\n   });\n          ')])]),d("li",null,[o(" 在要作用的容器元素上增加"),d("code",null,'class="chinese"'),o("的类名即可： "),d("pre",null,[d("code",null,[o('<article class="entry '),d("ins",null,"chinese"),o('">\n  <h1>读者的角色与经典同样重要</h1>\n  <p>一切诸经，皆不过是敲门砖，是要敲开门，唤出其中的人来，此人即是你自己。</p>\n  ……\n</article>')])])])],-1)),n[51]||(n[51]=d("small",null,[o("注：unocss-preset-chinese-typography是正文区域的样式增强，不是"),d("i",null,"CSS Reset"),o("的替代。因此"),d("b",null,"不建议"),o("将它作用在根标签（如"),d("code",null,"<body>"),o("或"),d("code",null,'<div id="app">'),o("）上。")],-1)),n[52]||(n[52]=d("hr",null,null,-1)),d("h2",q,[n[17]||(n[17]=o("效果示例")),m((r(),b("a",C,n[16]||(n[16]=[o("#")]))),[[u,"#examples"]])]),n[53]||(n[53]=d("p",null,[o("本页面"),d("em",null,"全页"),o("应用了unocss-preset-chinese-typography样式，所见即所得。下面是内置的多种排版效果演示。")],-1)),d("h3",O,[n[19]||(n[19]=o("古文")),m((r(),b("a",j,n[18]||(n[18]=[o("#")]))),[[u,"#example-ancient"]])]),n[54]||(n[54]=d("details",null,[d("summary",null,"如何使用？"),d("p",null,[o("为容器元素"),d("code",null,'<div class="chinese">'),o("添加名为"),d("code",null,"chinese--ancient"),o("的class即可实现古文版式：")]),d("pre",null,[d("code",null,'<div class="chinese chinese--ancient">...</div>')])],-1)),n[55]||(n[55]=d("details",{open:""},[d("summary",null,"示例"),d("section",{class:"demo"},[d("div",{class:"chinese chinese--ancient"},[d("h1",null,"出师表"),d("p",{class:"chinese-meta chinese-small"},[o("作者："),d("abbr",{title:"字孔明"},"諸葛亮"),o("（181年～234年10月8日）")]),d("p",null," 先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。 "),d("p",null,"宫中府中，俱为一体；陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理；不宜偏私，使内外异法也。"),d("p",null,"侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下：愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。"),d("p",null,"将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。"),d("p",null," 亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。 "),d("p",null," 臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。 "),d("p",null," 先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明；故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。 "),d("p",null," 愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏。臣不胜受恩感激。 "),d("p",null,"今当远离，临表涕零，不知所言。")])])],-1)),d("h3",P,[n[21]||(n[21]=o("诗词")),m((r(),b("a",T,n[20]||(n[20]=[o("#")]))),[[u,"#example-verse"]])]),n[56]||(n[56]=d("details",null,[d("summary",null,"如何使用？"),d("ul",null,[d("li",null,[o(" 诗词：为容器元素"),d("code",null,'<div class="chinese">'),o("添加名为"),d("code",null,"chinese--poetry"),o("的class实现诗词版式： "),d("pre",null,[d("code",null,'<div class="chinese chinese--poetry">\n  <h2>九月九日忆山东兄弟<span class="chinese-meta chinese-small">[唐]<abbr title="号摩诘居士">王维</abbr></span></h2>\n  <p class="chinese-x-large">\n    独在异乡为异客<span class="chinese-hang">，</span><br>\n    每逢佳节倍思亲<span class="chinese-hang">。</span><br>\n    遥知兄弟登高处<span class="chinese-hang">，</span><br>\n    遍插茱萸少一人<span class="chinese-hang">。</span>\n  </p>\n</div>')])]),d("li",null,[o(" 诗节：在古文版式"),d("code",null,'<div class="chinese chinese--ancient">'),o("中，为诗句添加名为"),d("code",null,"chinese-verse"),o("的class可以将其居中显示： "),d("pre",null,[d("code",null,'<div class="chinese chinese--ancient">\n  <h2>一剪梅·红藕香残玉簟秋<span class="chinese-meta chinese-small">[宋]<abbr title="号易安居士">李清照</abbr></span></h2>\n  <p class="chinese-verse chinese-x-large">\n    红藕香残玉簟秋。轻解罗裳，独上兰舟<span class="chinese-hang">。</span><br>\n    云中谁寄锦书来，雁字回时，月满西楼<span class="chinese-hang">。</span><br>\n    花自飘零水自流。一种相思，两处闲愁<span class="chinese-hang">。</span><br>\n    此情无计可消除，才下眉头，却上心头<span class="chinese-hang">。</span>\n  </p>\n</div>')])]),d("li",null,[o(" 搭配使用标点悬挂"),d("code",null,'<span class="chinese-hang">'),o("、元信息"),d("code",null,'<span class="chinese-meta chinese-small">'),o("来丰富展示效果。 ")])])],-1)),n[57]||(n[57]=d("details",{open:""},[d("summary",null,"示例"),d("section",{class:"demo"},[d("div",{class:"chinese chinese--ancient"},[d("h2",null,[o(" 一剪梅·红藕香残玉簟秋"),d("span",{class:"chinese-meta chinese-small"},[o("[宋]"),d("abbr",{title:"号易安居士"},"李清照")])]),d("p",{class:"chinese-verse chinese-x-large"},[o(" 红藕香残玉簟秋。轻解罗裳，独上兰舟"),d("span",{class:"chinese-hang"},"。"),d("br"),o(" 云中谁寄锦书来，雁字回时，月满西楼"),d("span",{class:"chinese-hang"},"。"),d("br"),o(" 花自飘零水自流。一种相思，两处闲愁"),d("span",{class:"chinese-hang"},"。"),d("br"),o(" 此情无计可消除，才下眉头，却上心头"),d("span",{class:"chinese-hang"},"。")])]),d("hr"),d("div",{class:"chinese chinese--poetry"},[d("h2",null,[o(" 好了歌"),d("span",{class:"chinese-meta chinese-small"},[o("[清]"),d("abbr",{title:"著曹雪芹"},"曹雪芹")])]),d("p",{class:"chinese-x-large"},[o(" 世人都晓神仙好，惟有功名忘不了；"),d("br"),o(" 古今将相在何方？荒冢一堆草没了。"),d("br"),o(" 世人都晓神仙好，只有金银忘不了；"),d("br"),o(" 终朝只恨聚无多，及到多时眼闭了。"),d("br"),o(" 世人都晓神仙好，只有姣妻忘不了；"),d("br"),o(" 君生日日说恩情，君死又随人去了。"),d("br"),o(" 世人都晓神仙好，只有儿孙忘不了；"),d("br"),o(" 痴心父母古来多，孝顺儿孙谁见了！"),d("br")])])])],-1)),d("h3",I,[n[23]||(n[23]=o("行间注")),m((r(),b("a",R,n[22]||(n[22]=[o("#")]))),[[u,"#example-annotation"]])]),n[58]||(n[58]=d("details",null,[d("summary",null,"如何使用？"),d("p",null,[o(" 为容器元素"),d("code",null,'<div class="chinese">'),o("添加名为"),d("code",null,"chinese--annotation"),o("的class后，搭配"),d("code",null,"<ruby>"),o("元素即可实现整齐的行间注效果： ")]),d("pre",null,[d("code",null,'<div class="chinese chinese--annotation">...</div>')])],-1)),n[59]||(n[59]=d("details",{open:""},[d("summary",null,"示例"),d("section",{class:"demo"},[d("div",{class:"chinese chinese--ancient chinese--annotation"},[d("h2",null,"庖丁解牛"),d("p",{class:"chinese-meta chinese-small"},[o("作者："),d("abbr",{title:"庄子"},"庄周"),o("（公元前369～公元前286年）")]),d("p",null,"吾生也有涯，而知也无涯。以有涯随无涯，殆已！已而为知者，殆而已矣！为善无近名，为恶无近刑。缘督以为经，可以保身，可以全生，可以养亲，可以尽年。"),d("p",null,[d("u",{title:"名丁的厨工。先秦古书往往以职业放在人名前"},[d("ruby",null,[o("庖"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"páo"),d("rp",null,")")]),o("丁")]),o("为文惠君解牛，手之所触，肩之所倚，足之所履，膝之所"),d("u",{title:"支撑，接触"},[d("ruby",null,[o("踦"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"yǐ"),d("rp",null,")")])]),o("，"),d("u",{title:"砉然：砉，又读xū，象声词。砉然，皮骨相离的声音"},[d("ruby",null,[o("砉"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"huā"),d("rp",null,")")]),o("然")]),d("ruby",null,[o("向"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"xiǎng"),d("rp",null,")")]),o("然，奏刀"),d("u",{title:"騞然：象声词，形容比砉然更大的进刀解牛声"},[d("ruby",null,[o("騞"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"huō"),d("rp",null,")")]),o("然")]),o("，莫不中音。合于《桑林》之舞，乃中《经首》之会。 ")]),d("p",null,[o(" 文惠君曰：「嘻，善哉！技"),d("u",{title:"通「盍」，何，怎样"},[d("ruby",null,[o("盖"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"hé"),d("rp",null,")")])]),o("至此乎？」 ")]),d("p",null,[o(" 庖丁释刀对曰：「臣之所好者，道也，进乎技矣。始臣之解牛之时，所见无非牛者。三年之后，未尝见全牛也。方今之时，臣以神遇而不以目视，官知止而"),d("u",{title:"指精神活动"},"神欲"),o("行。依乎"),d("u",{title:"指牛的生理上的天然结构"},"天理"),o("，"),d("u",{title:"击入大的缝隙"},[o("批大"),d("ruby",null,[o("郤"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"xì"),d("rp",null,")")])]),o("，"),d("u",{title:"顺着（骨节间的）空处进刀"},[o("导大"),d("ruby",null,[o("窾"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"kuǎn"),d("rp",null,")")])]),o("，"),d("u",{title:"依"},"因"),o("其"),d("u",{title:"指牛体本来的结构"},"固然"),o("，技经肯"),d("ruby",null,[o("綮"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"qìng"),d("rp",null,")")]),o("之未尝，而况大"),d("ruby",null,[o("軱"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"gū"),d("rp",null,")")]),o("乎！良庖岁更刀，割也；族庖月更刀，折也。今臣之刀十九年矣，所解数千牛矣，而刀刃若新发于"),d("ruby",null,[o("硎"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"xíng"),d("rp",null,")")]),o("。彼节者有间，而刀刃者无厚；以无厚入有间，恢恢乎其于"),d("em",null,"游刃必有余地"),o("矣，是以十九年而刀刃若新发于硎。虽然，每至于族，吾见其难为，"),d("ruby",null,[o("怵"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"chù"),d("rp",null,")")]),o("然为戒，视为止，行为迟。动刀甚微，"),d("ruby",null,[o("謋"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"huò"),d("rp",null,")")]),o("然已解，如土委地。提刀而立，为之四顾，为之"),d("ruby",null,[o("踌"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"chóu"),d("rp",null,")"),o("躇"),d("rp",null,"("),d("rt",{lang:"zh-Latn"},"chú"),d("rp",null,")")]),o("满志，善刀而藏之。」 ")]),d("p",null,"文惠君曰：「善哉！吾闻庖丁之言，得养生焉。」")])])],-1)),d("h3",U,[n[25]||(n[25]=o("多栏排版")),m((r(),b("a",D,n[24]||(n[24]=[o("#")]))),[[u,"#example-columns"]])]),n[60]||(n[60]=d("p",null,"预置多种多栏布局类，可以按栏数或每栏行宽进行设置。",-1)),n[61]||(n[61]=d("details",null,[d("summary",null,"如何使用？"),d("p",null,[o("为容器元素"),d("code",null,'<div class="chinese">'),o("添加名为"),d("code",null,"chinese--columns-2"),o("的class即可实现双栏排版：")]),d("pre",null,[d("code",null,'<div class="chinese chinese--columns-2">...</div>')]),d("table",null,[d("thead",null,[d("tr",null,[d("th",{style:{width:"100px"}},"方式"),d("th",{style:{width:"200px"}},"对应类名"),d("th",{style:{width:"300px"}},"可选数值")])]),d("tbody",null,[d("tr",null,[d("td",null,"按栏目数量"),d("td",null,[d("code",null,"chinese--columns-3")]),d("td",null,"不限，但是建议不超过5")]),d("tr",null,[d("td",null,"按每栏行宽"),d("td",null,[d("code",null,"chinese--columns-width-16")]),d("td",null,"建议为4的倍数")])])])],-1)),d("details",E,[n[27]||(n[27]=d("summary",null,"示例",-1)),y(e,null,{default:h((()=>n[26]||(n[26]=[d("figure",{class:"card card--multi-column"},[d("section",{class:"chinese--columns-2"},[d("p",null," 先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。 "),d("p",null,"宫中府中，俱为一体；陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理；不宜偏私，使内外异法也。"),d("p",null,"侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下：愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。"),d("p",null,"将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。"),d("p",null," 亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。 "),d("p",null," 臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。 "),d("p",null," 先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明；故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。 "),d("p",null," 愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏。臣不胜受恩感激。 "),d("p",null,"今当远离，临表涕零，不知所言。")]),d("figcaption",null,"多栏排版演示")],-1)]))),_:1})]),d("h3",H,[n[29]||(n[29]=o("竖排排版")),m((r(),b("a",A,n[28]||(n[28]=[o("#")]))),[[u,"#example-vertical"]])]),n[62]||(n[62]=d("p",null,"预置传统的竖排（直排）方向排版，同样贴合栅格。",-1)),n[63]||(n[63]=d("details",null,[d("summary",null,"如何使用？"),d("p",null,[o("为容器元素"),d("code",null,'<div class="chinese">'),o("添加名为"),d("code",null,"chinese--vertical"),o("的class即可实现竖排布局：")]),d("pre",null,[d("code",null,'<div class="chinese chinese--vertical">...</div>')])],-1)),d("details",B,[n[31]||(n[31]=d("summary",null,"示例",-1)),y(e,null,{default:h((()=>n[30]||(n[30]=[d("figure",{class:"card card--vertical"},[d("div",{class:"card__vertical-container"},[d("section",{class:"chinese--vertical chinese--ancient"},[d("h1",null,"出師表"),d("p",{class:"chinese-small"},[o("作者："),d("abbr",{title:"字孔明"},"諸葛亮"),o("（181年－234年10月8日）")]),d("p",null,"先帝創業未半，而中道崩殂；今天下三分，益州疲弊，此誠危急存亡之秋也﹗然侍衞之臣，不懈於內；忠志之士，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。"),d("p",null,"誠宜開張聖聽，以光先帝遺德，恢弘志士之氣﹔不宜妄自菲薄，引喻失義，以塞忠諫之路也。"),d("p",null,"宮中、府中，俱為一體；陟罰臧否，不宜異同。若有作姦、犯科，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。"),d("p",null," 侍中、侍郎郭攸之、費禕、董允等，此皆良實，志慮忠純，是以先帝簡拔以遺陛下。愚以為宮中之事，事無大小，悉以咨之，然後施行，必能裨補闕漏，有所廣益。將軍向寵，性行淑均，曉暢軍事，試用於昔日，先帝稱之曰「能」，是以眾議舉寵為督。愚以為營中之事，悉以咨之，必能使行陣和睦，優劣得所。 "),d("p",null," 親賢臣，遠小人，此先漢所以興隆也﹔親小人，遠賢臣，此後漢所以傾頹也。先帝在時，每與臣論此事，未嘗不歎息痛恨於桓、靈也！侍中、尚書、長史、參軍，此悉貞良死節之臣，願陛下親之、信之，則漢室之隆，可計日而待也。 "),d("p",null," 臣本布衣，躬耕於南陽，苟全性命於亂世，不求聞達於諸侯。先帝不以臣卑鄙，猥自枉屈，三顧臣於草廬之中，諮臣以當世之事；由是感激，遂許先帝以驅馳。後值傾覆，受任於敗軍之際，奉命於危難之間，爾來二十有一年矣。先帝知臣謹慎，故臨崩寄臣以大事也。受命以來，夙夜憂歎，恐託付不效，以傷先帝之明。故五月渡瀘，深入不毛。今南方已定，兵甲已足，當獎率三軍，北定中原，庶竭駑鈍，攘除姦凶，興復漢室，還於舊都。此臣所以報先帝而忠陛下之職分也。至於斟酌損益，進盡忠言，則攸之、禕、允之任也。 "),d("p",null," 願陛下託臣以討賊興復之效；不效，則治臣之罪，以告先帝之靈。若無興德之言，則責攸之、禕、允等之慢，以彰其咎。陛下亦宜自謀，以諮諏善道，察納雅言，深追先帝遺詔。臣不勝受恩感激。今當遠離，臨表涕零，不知所言！ ")])]),d("figcaption",null,"竖排排版演示")],-1)]))),_:1})]),n[64]||(n[64]=d("hr",null,null,-1)),d("h2",F,[n[33]||(n[33]=o("设计原则")),m((r(),b("a",G,n[32]||(n[32]=[o("#")]))),[[u,"#guidelines"]])]),n[65]||(n[65]=d("p",null,"它不作为一个CSS Reset出现，而是根据通行的中文排版规范，对网页正文区域进行排版样式增强。",-1)),n[66]||(n[66]=d("h3",null,"文字",-1)),d("p",null,[n[35]||(n[35]=o(" 参考《中文排版需求")),d("sup",null,[m((r(),b("a",J,n[34]||(n[34]=[o("[1]")]))),[[u,"#fn-01"]])]),n[36]||(n[36]=o("》中描述的常用书籍排版字体，提供了黑体、宋体和")),n[37]||(n[37]=d("u",{title:"以正文宋体、标题楷体构成的搭配"},"传统",-1)),n[38]||(n[38]=o("三种字体风格，前两者分别对应无衬线、衬线字体族。文字默认采用16px作为标准字号。在标题等文字较大的情况下，会适当地增加字间距以便获得更好地可读性。 "))]),n[67]||(n[67]=d("details",null,[d("summary",null,"查看字体风格详细对照表"),d("section",{class:"section"},[d("table",null,[d("caption",null," 各字体族下不同标签对应的字体 "),d("thead",null,[d("tr",null,[d("td",{style:{width:"60px"}}),d("th",{style:{width:"60px"}},"黑体"),d("th",{style:{width:"60px"}},"宋体"),d("th",{style:{width:"60px"}},"传统"),d("th",{style:{width:"380px"}},"备注")])]),d("tbody",null,[d("tr",null,[d("th",null,"标题"),d("td",{rowspan:"7"},"黑体"),d("td",{rowspan:"7"},"宋体"),d("td",null,"楷体"),d("td",null,[d("section",null,[d("h1",null,"记忆中的站台")])])]),d("tr",null,[d("th",null,"正文"),d("td",null,"宋体"),d("td",null,[d("section",null,[d("p",null,"那是一个风雨交加的夜晚。")])])]),d("tr",null,[d("th",null,"引用"),d("td",null,"楷体"),d("td",null,[d("section",null,[d("blockquote",null,"锣鼓喧天，鞭炮齐鸣，红旗招展，人山人海。")])])]),d("tr",null,[d("th",null,"强调"),d("td",null,"宋体"),d("td",null,[d("section",null,[d("p",null,[o("父亲"),d("em",null,"特意"),o("嘱咐了我两句。")])])])]),d("tr",null,[d("th",null,"对话"),d("td",null,"楷体"),d("td",null,[d("section",null,[d("p",null,[o("他说："),d("q",null,"我买几个橘子去。你就在此地，不要走动。")])])])]),d("tr",null,[d("th",null,"图例"),d("td",null,"黑体"),d("td",null,[d("section",null,[d("figure",null,[d("figcaption",null,"橘子")])])])]),d("tr",null,[d("th",null,"表头"),d("td",null,"黑体"),d("td",null,[d("section",null,[d("table",null,[d("caption",null," 当时的情形 "),d("tr",null,[d("th",null,"角色"),d("th",null,"物品")]),d("tr",null,[d("td",null,"父亲"),d("td",null,"橘子")]),d("tr",null,[d("td",null,"我"),d("td",null,"车票")])])])])]),d("tr",null,[d("th",null,"角标"),d("td",null,"黑体"),d("td",null,"黑体"),d("td",null,"黑体"),d("td",null,[o("鲁迅"),d("sup",null,"[1]"),o("曾经没有说过")])])])])])],-1)),n[68]||(n[68]=d("h3",null,"标点",-1)),n[69]||(n[69]=d("p",null,"参考《中文排版需求》制定符号样式。唯一的差异在于简体中文一律采用直角引号（「」）替代弯引号（“”），这样可以保持字符等宽。",-1)),n[70]||(n[70]=d("h3",null,"间距",-1)),n[71]||(n[71]=d("p",null,"为保持页面元素总是贴合垂直栅格，块级元素（段落、列表、表格等）采用一行行高作为底边距，半行行高作为顶边距。标题根据亲密性原则采用相反的边距设计。",-1)),n[72]||(n[72]=d("hr",null,null,-1)),d("h2",K,[n[40]||(n[40]=o("附录")),m((r(),b("a",M,n[39]||(n[39]=[o("#")]))),[[u,"#appendix"]])]),d("h3",N,[n[42]||(n[42]=o("标签示例表")),m((r(),b("a",Q,n[41]||(n[41]=[o("#")]))),[[u,"#tags"]])]),n[73]||(n[73]=d("details",{open:""},[d("summary",null,"查看标签示例表"),d("section",{class:"section"},[d("table",null,[d("caption",null," 常用标签样式示例表 "),d("tr",null,[d("th",{style:{width:"72px"}},"类型"),d("th",{style:{width:"320px"}},"标签"),d("th",{style:{width:"240px"}},"效果")]),d("tr",null,[d("td",null,"链接"),d("td",null,[d("code",null,'<a href="https://github.com/kirklin/unocss-preset-chinese" title="赫蹏">unocss-preset-chinese</a>')]),d("td",null,[d("a",{href:"https://github.com/kirklin/unocss-preset-chinese",title:"unocss-preset-chinese"},"unocss-preset-chinese")])]),d("tr",null,[d("td",null,"缩写"),d("td",null,[d("code",null,'<abbr title="Cascading Style Sheets">CSS</abbr>')]),d("td",null,[d("abbr",{title:"Cascading Style Sheets"},"CSS")])]),d("tr",null,[d("td",null,"代码"),d("td",null,[d("code",null,"<code>.chinese { star: 5; }</code>")]),d("td",null,[d("code",null,".chinese { star: 5; }")])]),d("tr",null,[d("td",null,"专名号"),d("td",null,[d("code",null,'此时来自<u title="位于山东省聊城市阳谷县城东">景阳冈</u>的<u>武松</u>大喝一声：<q>纳命来！</q>')]),d("td",null,[o("此时来自"),d("u",{title:"位于山东省聊城市阳谷县城东"},"景阳冈"),o("的"),d("u",null,"武松"),o("大喝一声："),d("q",null,"纳命来！")])]),d("tr",null,[d("td",null,"文本变动"),d("td",null,[d("code",null,'我写错<del datetime="17:00:00">拉</del><ins datetime="18:15:00">啦</ins>！')]),d("td",null,[o("我写错"),d("del",{datetime:"17:00:00"},"拉"),d("ins",{datetime:"18:15:00"},"啦"),o("！")])]),d("tr",null,[d("td",null,"文本更新"),d("td",null,[d("code",null,"在陌生的城市里迷路，所以最后我们决定跟着<s>导航</s>地图。")]),d("td",null,[o("在陌生的城市里迷路，所以最后我们决定跟着"),d("s",null,"导航"),o("地图。")])]),d("tr",null,[d("td",null,"引号"),d("td",null,[d("code",null,"她说：<q>嘿，你好。</q>")]),d("td",null,[o("她说："),d("q",null,"嘿，你好。")])]),d("tr",null,[d("td",null,"术语"),d("td",null,[d("code",null,"在固定版面内，<dfn>排版</dfn>(英语：Typesetting) 摆置各种不同类型的资料。")]),d("td",null,[o("在固定版面内，"),d("dfn",null,"排版"),o("(英语：Typesetting) 摆置各种不同类型的资料。")])]),d("tr",null,[d("td",null,"标记"),d("td",null,[d("code",null,[o("这个公式"),d("mark",null,"很重要"),o("，请记住。")])]),d("td",null,[o("这个公式"),d("mark",null,"很重要"),o("，请记住。")])]),d("tr",null,[d("td",null,"强调"),d("td",null,[d("code",null,[o("相信自己，"),d("em",null,"你可以做到"),o("！")])]),d("td",null,[o("相信自己，"),d("em",null,"你可以做到"),o("！")])]),d("tr",null,[d("td",null,"着重号"),d("td",null,[d("code",null,[o("我们"),d("span",{class:"chinese-em"},"绝不会"),o("放弃。")])]),d("td",null,[o("我们"),d("span",{class:"chinese-em"},"绝不会"),o("放弃。")])])])])],-1))])])),_:1})}}))));var W;const X=v(V,[["__scopeId","data-v-891d6715"]]);export{X as default};
