import * as S from '../../styles/Review.styled';
import BestBadge from '../../../public/icons/badge_best.svg';
import CleanerBadge from '../../../public/icons/badge_cleaner.svg';
import ReviewItem from './ReviewItem';
import DownArrow from '../../../public/icons/angle-down.svg';
import Image from 'next/image';
import { slide1, slide2 } from '@/constants/reviewPageSlideItems';
import Pagination from 'react-js-pagination';
import BannerSlide from './BannerSlide';
import FAQItem from '../common/FAQ/FAQItem';

const dummy = [
  {
    id: 1,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '김아무개',
    isNew: true,
    isBest: false,
    location: '서울시 강남구',
    time: '2022-03-19',
    imageBefore: 'https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg',
    imageAfter: 'https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg',
  },
  {
    id: 2,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '강아무개',
    isNew: true,
    isBest: false,
    location: '서울시 강남구',
    time: '2022-03-19',
    imageBefore: 'https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg',
    imageAfter: 'https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg',
  },
  {
    id: 3,
    title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
    body: '너무 좋아요 어쩌구',
    userName: '박아무개',
    isNew: true,
    isBest: false,
    location: '서울시 강남구',
    time: '2022-03-19',
    imageBefore: 'https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg',
    imageAfter: 'https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg',
  },
];

const dummyBest = {
  id: 4,
  title: '열다 서비스를 받고 옷입는 시간이 줄었어요',
  body: '너무 좋아요 어쩌구',
  userName: '박아무개',
  isNew: false,
  isBest: true,
  location: '서울시 강남구',
  time: '2022-03-19',
  imageBefore: 'https://cdn.univ20.com/wp-content/uploads/2016/03/099cb95e398e9f8d74f63eccb5c75db2.jpg',
  imageAfter: 'https://img.etoday.co.kr/pto_db/2019/02/600/20190225135415_1304548_1200_800.jpg',
};

function ReviewLayout() {
  return (
    <>
      <S.TitleLarge>
        <span>옷장 정리로</span>
        <span>더 깔끔한 일상을</span>
        <span>만나보세요.</span>
      </S.TitleLarge>
      <S.Description>
        <span>열다 서비스의 전문적인 청소 시스템으로</span>
        <span>보다 편리한 생활을 느껴보세요.</span>
      </S.Description>

      <S.SlideContainer className="slide-container">
        <BannerSlide slideItems={slide1}/>
        <BannerSlide slideItems={slide2} reverse={true} />
      </S.SlideContainer>

      <S.ScrollDown>
        <span>내려서 더 보기</span>
        <DownArrow />
      </S.ScrollDown>
      <S.TitleLarge>
        <span>열다를 만나신 분들의</span>
        <span>이야기를 들어보세요</span>
      </S.TitleLarge>
      <S.Description>
        <span>사진을 클릭하시면 열다 서비스를 사용하신</span>
        <span>사용자 분들의 후기를 자세히 보실 수 있습니다.</span>
      </S.Description>

      <S.Reviews className="reviews">
        <S.TitleMedium>
          <BestBadge />
          베스트 이용후기
        </S.TitleMedium>
        <S.BestReview className="best_review">
          <div className="prograss_container">
            <Image src={`${dummyBest.imageAfter}`} alt="베스트리뷰" fill />
          </div>
          <FAQItem
            faq={{
              title: `${dummyBest.title}`,
              description: `${dummyBest.body}`,
              info: `${dummyBest.location} ${dummyBest.userName}님`,
            }}
          />
        </S.BestReview>
        <S.TitleMedium>
          <CleanerBadge />
          열다의 모든 후기
        </S.TitleMedium>
        <S.AllReview>
          {dummy.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </S.AllReview>
      </S.Reviews>
      <S.Pagenation>
        <Pagination
          activePage={1}
          itemsCountPerPage={3}
          totalItemsCount={4}
          hideFirstLastPages={true}
          linkClassPrev="prev"
          linkClassNext="next"
          onChange={() => {}}
        />
      </S.Pagenation>
    </>
  );
}

export default ReviewLayout;
