const resultsdata = [
  {
    id: 1,
    name: '주신',
    image: "https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fgod.png?alt=media&token=a4a164bc-0260-46f9-81fd-f52d0735dffe",
    subtitle: `
    예상수익률: 80%`,
    type: `
    투자유형: 스캘핑, 단타, 스윙, 장기`,
    per:`
    주신에 속할 비율: 4%`,
    description: `
    투자에 필요한 모든 재능을 갖추고 있으며 🦸‍♂️
    모든 투자유형을 아우르는 능력을 가지고 있다. 
    마음만 먹으면 소액의 용돈벌이가 가능하며, 
    성장가능성이 큰 테마에서 몇번의 매매만으로도 
    큰 이익을 볼 수 있다.
    '시장의 광기'와 '자만심'만 간과하지 않으면
    주식으로 부자되는 것은 시간문제!  
    `,
    solution: '=> 마인드 컨트롤에 신경을 쓰면 더 좋은 결과가 있을 것 🚀'
  },
  {
    id: 2,
    name: '퀀트의 아버지, 에드워드 소프',
    image: "https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fthorp.png?alt=media&token=6f870808-9d10-4d95-aa4d-a752efa0b7d7",
    subtitle: `
    예상수익률: 60%`,
    type:`
    투자유형: 스캘핑, 단타, 몰빵`,
    per:`
    에드워드 소프에 속할 비율: 6%`,
    description: `
    '모든 것은 지표가 말한다' 프로그램 매매를 이용하는 스타일 🎯
     계량적 투자전략을 추구하며, 기계적으로 매매한다. 
     다만, 프로그래밍을 이용하여 자동매매 프로그램을 만드는 데
     어렵고, 만들더라도 제대로 실행하기 위해서는 
     많은 시행착오를 겪어야 하므로, 오랜 시간을 요구한다.  

    `,
    solution: '=> 심리적인 요소들도 고려하자 🚀'
  },
  {
    id: 3,
    name: '도박의신, 고니',
    image: "https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fgamble.png?alt=media&token=d20183e2-5eac-48d7-9ece-1f2592c6c94f",
    subtitle: `
    예상수익률: -100% ~ +100%`,
    type: `
    투자유형: 스캘핑, 단타, 몰빵`,
    per:`
    고니에 속할 비율: 8%`,
    description: `
    주식을 마치 도박처럼 하는 스타일 🔥
    '인생은 한방'이라는 마인드로, 몰빵 매매를 주로한다. 
    결과적으로, 이 유형에 속하는 대부분의 사람들은 
    한강으로 직행하거나 한강뷰가 보이는 아파트에서 
    거주하게 된다. 
    `,
    solution: '=> 승부사의 기질을 가지고 있다면, 칼손절을 잘하자 🚀'
  },
  {
    id: 4,
    name: '투자의 귀재, 워렌버핏',
    image: "https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fwb.png?alt=media&token=bf1f34fa-c52a-45df-a965-55d53dc87f2b",
    subtitle: `
    예상수익률: 30%`,
    type: `
    투자유형: 가치투자형`,
    per:`
    워렛버핏에 속할 비율: 12%`,
    description: `
    철저한 종목분석을 통해 가치투자를 지향하는 스타일. 
    본인만의 고유한 투자 철학을 가지고 있으며, 
    이를 이행하고 장기적으로 대응할 유연성을 갖춘 인재. 
    전업투자자로는 어울리지 않으며,
    본인이 감당할 수 없는 금액으로 투자한다면, 
    큰 손실을 불러올 수 있으니 조심할 것!  
    `,
    solution: '=> 차츰 투자금액을 늘려나가면서 수익을 극대화하는 방법 추천 !! 🚀'
  },
  {
    id: 5,
    name: '거지',
    image: "https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fbeggar.png?alt=media&token=9438afb8-a194-408f-a34a-508ba70be789",
    subtitle: `
    예상수익률: -30%`,
    type:`
    투자유형: 뇌동매매`,
    per:`
    거지에 속할 비율: 30%`,
    description: `
    아직 주식 투자할 준비가 되지 않았으며, 하고 있다면
    손실을 보고 있을 확륲이 높은 유형이다 🤔
    주식과 관련된 기본적인 지식과 개념들을 익히고,
    소액으로 입문하는 게 좋다.
    `,
    solution: '=> 천리길도 한걸음부터... 개념부터 익히자 🚀'
  },
  {
    id: 6,
    name: '평범한 투자자, 개미',
    image: "https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fant.png?alt=media&token=6ec714b0-b3f5-48d0-8b5d-0022b9581d8c",
    subtitle: `
    예상수익률: 10%`,
    type: `
    투자유형: 단타, 스윙`,
    per:`
    개미에 속할 비율: 40%`,
    description: `
    🙋‍♀️ 가장 흔한 유형으로 대부분의 평범한 개인들이며 🙋‍♂️
    기본적인 재무상태 및 뉴스를 보며 매매한다.
    준수한 투자방식과 마인드를 가지고 있지만,
    테마성 종목을 매수하게 되면 급격히 흔들리며,
    뇌동매매할 가능성이 높다.  
    `,
    solution: '=> 적당히 일정있는 종목을 안전하게 매수하자 🚀'
  }
];

export default resultsdata;