const questionnaire = [
  // {
  //   id: 1,
  //   previousId: null,
  //   nextId: 2,
  //   type: 'overview',
  //   content: {
  //     title: 'Day1. In_Sanfrancisco',
  //     explanation: '스탠포드대학교를 갓 졸업한 당신! 미래에 대한 부푼 꿈과 기대를 안고, 나를 위한 졸업선물로 샌프란시스코를 여행하게 됩니다. 🥳',
  //     tips: [
  //       '# 실리콘밸리는 미국 캘리포니아 주의 샌프란시스코 만을 둘러싼 지역으로, 세계 최대의 기술 연구가 활발한 창업의 성지에요!',
  //       '# 스탠포드 대학교는 실리콘밸리 기업에게 새롭고 젊은 피를 공급하는 대표적인 명문 대학이에요.',
  //     ],
  //   },
  // },
  {
    id: 2,
    previousId: 1,
    nextId: 3,
    type: 'question',
    content: {
      title: 'Question 1',
      question: '현재 수중에 1000만원이 있다. 최고의 수익률을 낼 수 있는 방법은?',
      options: [
        { id: 1, title: '스캘핑- 초단위 거래로 1~3% 띄기를 하며 회전율을 높인다.' },
        { id: 2, title: '단타- 최대 1주일을 예상하며, 10%이상을 목표로 한다.' },
        { id: 3, title: '스윙- 최대 3개월까지 보유하며, 저점에 있는 종목을 골라 30% 이상의 수익을 목표로 한다.' },
        { id: 4, title: '장투- 미래에 유망한 종목을 타겟으로, 최소 6개월 이상 보유하며 수익을 극대화한다.' },
      ],
    },
  },
  {
    id: 3,
    previousId: 2,
    nextId: 4,
    type: 'question',
    content: {
      title: 'Question 2',
      question: '나의 주된 주식매매 방법은',
      options: [
        { id: 1, title: '뉴스매매- 좋은 재료는 무조건 상승이지. 좋은 소식이 있는 종목을 매수한다.' },
        { id: 2, title: '차티스트- 차트분석만이 살 길이다. 차트분석을 통해 매수한다.' },
        { id: 3, title: '가치투자- 재무제표에 답이 있다. 매출이 높은 종목을 매수한다.' },
        { id: 4, title: '유료구독- 분석을 귀찮게 내가 왜 해? 유료주식방에서 추천받은 종목을 매수한다.' },
      ],
    },
  },
  {
    id: 4,
    previousId: 3,
    nextId: 5,
    type: 'question',
    content: {
      title: 'Question 3',
      question: '어제 매수한 종목이 30%이 상승하였다. 오늘은 그 종목이 30% 하락하였다. 내 손익은?',
      options: [
        { id: 1, title: '본전' },
        { id: 2, title: '9% 수익' },
        { id: 3, title: '5% 손실' },
        { id: 4, title: '9% 손실' },
      ],
    },
  },
  {
    id: 5,
    previousId: 4,
    nextId: 6,
    type: 'question',
    content: {
      title: 'Question 4',
      question: '평소에 관심있던 종목이 갑자기 오른다면',
      options: [
        { id: 1, title: '속이 쓰리지만, 참는다.' },
        { id: 2, title: '늦었을 때가 빠른 법, 바로 추격매수!!' },
        { id: 3, title: '‘역시 내 안목은 틀리지 않았어’라고 생각하며, 다른 관심종목을 매수한다.' },
        { id: 4, title: '‘이 종목이 오르면, 같은 테마도 오르겠지?’ 같은 테마에 있는 다른 종목을 매수한다.' },
      ],
    },
  },
  {
    id: 6,
    previousId: 5,
    nextId: 7,
    type: 'question',
    content: {
      title: 'Question 5',
      question: '무려 90일 동안 -30% 이상으로 물려있었던 종목이 -5%까지 올라왔다.',
      options: [
        { id: 1, title: '‘하나님, 감사합니다.’ 지금이라도 당장 매도'},
        { id: 2, title: '‘좀만 더 참자......’ 본전이 올 때까지 무조건 버틴다.' },
        { id: 3, title: '기회비용이 아깝다. 손절하고, 수급 좋은 다른 종목에 투자한다. ' },
        { id: 4, title: '‘내 사전에 손절이란 없다’ 10원이라도 수익이 날 때까지 존버. ' },
      ],
    },
  },
  {
    id: 7,
    previousId: 6,
    nextId: 8,
    type: 'question',
    content: {
      title: 'Question 6',
      question: '보유하고 있던 종목이 오르고 있다면?',
      options: [
        { id: 1, title: '목표 수익률을 정해놓고, 그 수익률에 도달하면 전량 매도.' },
        { id: 2, title: '조금씩 분할 매도.' },
        { id: 3, title: '상승세가 탔으니, 더 매수하여 수익 극대화를 노린다.' },
        { id: 4, title: '다시 떨어질 수도 있으니, 바로 매도.' },
      ],
    },
  },
  {
    id: 8,
    previousId: 7,
    nextId: 9,
    type: 'question',
    content: {
      title: 'Question 7',
      question: '종목을 고를 때 가장 중요하게 보는 요소는?',
      options: [
        { id: 1, title: '거래량' },
        { id: 2, title: '수급 주체 (외인, 기관 등)' },
        { id: 3, title: '매물대' },
        { id: 4, title: '신용비율' },
      ],
    },
  },
  {
    id: 9,
    previousId: 8,
    nextId: 10,
    type: 'question',
    content: {
      title: 'Question 8',
      question: '보유하고 있던 종목이 갑자기 5% 하락한다면?',
      options: [
        { id: 1, title: '이유불문하고 더 하락하기 전에 빠르게 손절한다.' },
        { id: 2, title: '하락하는 원인을 찾아본다.' },
        { id: 3, title: '5%는 건강한 조정이라고 생각하며, 그냥 있는다.' },
        { id: 4, title: '스트레스 받기 싫어서 다른 일을 한다.' },
      ],
    },
  },
  {
    id: 10,
    previousId: 9,
    nextId: 11,
    type: 'question',
    content: {
      title: 'Question 9',
      question: '주식의 가격은',
      options: [
        { id: 1, title: '기대감에 의해 결정된다.' },
        { id: 2, title: '그 기업이 가지는 가치에 의해 결정된다.' },
        { id: 3, title: '투자자들의 심리에 의해 결정된다.' },
        { id: 4, title: '시장에 의해 결정된다.' },
      ],
    },
  },
  {
    id: 10,
    previousId: 9,
    nextId: 11,
    type: 'question',
    content: {
      title: 'Question 10',
      question: '주식을 프로그래밍을 이용하여 자동화 매매를 한다면',
      options: [
        { id: 1, title: '투자자들의 심리적인 요소를 반영하지 못하기 때문에, 인간한테는 안된다.' },
        { id: 2, title: '기계는 시키는대로만 하기 때문에, 인간보다 낫다.' },
        { id: 3, title: '다양한 환경적인 변수를 고려하지 못하기 때문에, 상용화는 힘들다.' },
        { id: 4, title: '이미 퀀트 트레이딩이 있는 것으로 보아, 충분히 가능성 있다.' },
      ],
    },
  }
];

export default questionnaire;