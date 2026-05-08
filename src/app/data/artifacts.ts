export interface Artifact {
  id: number;
  name: string;
  dynasty: string;
  year: string;
  description: string;
  story: string;
  image: string;
  puzzleImage?: string;
  personality: string;
  modelType: 'vase' | 'jade' | 'painting' | 'embroidery' | 'inkstone';
  modelPath?: string;
}

export const artifacts: Artifact[] = [
  {
    id: 1,
    name: "真珠舍利宝幢",
    dynasty: "北宋",
    year: "公元960-1127年",
    description: "苏州博物馆镇馆之宝，是北宋时期的佛教圣物。宝幢通高122.6厘米，由木胎、金银、珍珠、宝石等材料制成，工艺精湛，是中国佛教文物中的珍品。",
    story: "我诞生于北宋太平兴国二年，是当时吴越国王钱俶为祈求国泰民安而建造的。历经千年风霜，我见证了苏州的兴衰变迁，承载着虔诚的信仰和精湛的工艺。每一颗珍珠、每一片金叶，都凝聚着古人的智慧与虔诚。",
    image: new URL('../../assets/images/ta.png', import.meta.url).href,
    puzzleImage: new URL('../../assets/images/tapin.png', import.meta.url).href,
    personality: "庄严神圣，充满佛性智慧，语气平和宁静",
    modelType: 'jade',
    modelPath: new URL('../../assets/models/zhen.glb', import.meta.url).href
  },
  {
    id: 2,
    name: "秘色瓷莲花碗",
    dynasty: "五代",
    year: "公元907-960年",
    description: "秘色瓷是越窑青瓷中的极品，专供皇室使用。这件莲花碗釉色青翠，造型优美，代表了五代时期制瓷工艺的最高水平。",
    story: "我来自越窑，那个出产'秘色瓷'的神秘之地。我的釉色如千峰翠色，如湖水碧波。在五代十国的乱世中，我曾是王室贵胄的珍宝。如今静卧于苏州博物馆，继续诉说着千年前的繁华。",
    image: new URL('../../assets/images/wan.png', import.meta.url).href,
    puzzleImage: new URL('../../assets/images/wanpin.png', import.meta.url).href,
    personality: "优雅细腻，如水般温润，富有诗意",
    modelType: 'vase',
    modelPath: new URL('../../assets/models/teacup.glb', import.meta.url).href
  },
  {
    id: 3,
    name: "吴王夫差剑",
    dynasty: "春秋",
    year: "公元前473年",
    description: "吴王夫差剑是春秋时期吴国的青铜兵器，剑身修长，剑刃锋利，剑格镶嵌绿松石，剑身有清晰的铭文'攻吴王夫差自作其元用'。此剑代表了春秋时期吴越地区青铜铸造工艺的最高水平，是研究吴越历史和青铜文化的珍贵实物资料。",
    story: "我是吴王夫差的佩剑，见证了春秋末年吴越争霸的风云岁月。当年夫差持我南征北战，称霸一时。我曾饮过无数勇士的鲜血，也曾见证过吴越两国的兴衰荣辱。千年之后，我依然锋利如初，仿佛还能感受到当年金戈铁马的气息。",
    image: new URL('../../assets/images/jian.png', import.meta.url).href,
    puzzleImage: new URL('../../assets/images/jianpin.png', import.meta.url).href,
    personality: "威武霸气，充满英雄气概，讲述着吴越争霸的传奇故事",
    modelType: 'jade',
    modelPath: new URL('../../assets/models/greendagger.glb', import.meta.url).href
  },
  {
    id: 4,
    name: "蟠螭三足提梁盉",
    dynasty: "战国",
    year: "公元前475-221年",
    description: "蟠螭三足提梁盉是战国时期的青铜酒器，造型独特，器身装饰蟠螭纹，三足鼎立，提梁设计精巧。此器铸造工艺精湛，纹饰繁复精美，是战国时期青铜艺术的杰出代表，反映了当时高超的青铜铸造技术和审美水平。",
    story: "我是战国时期的青铜酒器，见证了那个百家争鸣、英雄辈出的时代。我的身上布满了精美的蟠螭纹饰，每一处都凝聚着工匠的心血。在战国的宴会上，我曾盛放过香醇的美酒，见证过无数次觥筹交错的场景。岁月流转，我依然保持着当年的威严与华美。",
    image: new URL('../../assets/images/sanzu.png', import.meta.url).href,
    puzzleImage: new URL('../../assets/images/hupin.png', import.meta.url).href,
    personality: "古朴厚重，充满历史沧桑感，讲述着战国时期的礼仪文化",
    modelType: 'vase',
    modelPath: new URL('../../assets/models/ancientbronze.glb', import.meta.url).href
  }
];