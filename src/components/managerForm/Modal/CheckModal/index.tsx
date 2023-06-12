import React from 'react';

import * as U from '../UnCompleteModal/style';
import * as S from './style';

function CheckModal({ state, setIsSubmitClicked }: any) {
  const {
    manager_name,
    manager_phone,
    activity_day,
    activity_region,
    manager_license,
    manager_license_etc,
    field_experience,
    main_job,
    main_job_etc,
    manager_drive,
  } = state;

  const resultDays = activity_day.map((value: boolean, index: number) => {
    if (index === 0 && value) return '월';
    else if (index === 1 && value) return '화';
    else if (index === 2 && value) return '수';
    else if (index === 3 && value) return '목';
    else if (index === 4 && value) return '금';
    else if (index === 5 && value) return '토';
    else if (index === 6 && value) return '일';
  });

  const submitHandler = () => {};

  return (
    <S.CheckModal className="check-modal">
      <S.Header className="header">
        <h1>열다 옷장정리 매니저 신청</h1>

        <p>
          작성이 완료 되었습니다!
          <br />
          작성해주신 내용을 확인해주세요.😁
        </p>
      </S.Header>

      <div className="content">
        <S.InputContents className="">
          <S.Content>
            <h3>매니저 정보</h3>
            <dl>
              <div>
                <dt>이름</dt>
                <dd>{manager_name}</dd>
              </div>

              <div>
                <dt>연락처</dt>
                <dd>{manager_phone}</dd>
              </div>

              <div>
                <dt>활동 가능 요일</dt>
                <dd>
                  {resultDays.map((day: string, index: number) => {
                    if (index === resultDays.length - 1) return <span key={day}>{day}</span>;
                    else if (day) return <span key={day}>{day}, </span>;
                  })}
                </dd>
              </div>

              <div>
                <dt>활동 가능 지역</dt>
                <dd>
                  {activity_region.seoul.map((district: string, index: number) => {
                    if (index === activity_region.seoul.length - 1 && activity_region.gyeonggi.length === 0) {
                      return <span key={district}>서울 {district}</span>;
                    } else {
                      return <span key={district}>서울 {district} / </span>;
                    }
                  })}

                  {activity_region.gyeonggi.map((district: string, index: number) => {
                    if (index === activity_region.gyeonggi.length - 1) {
                      return <span key={district}>경기 {district}</span>;
                    } else {
                      return <span key={district}>경기 {district} / </span>;
                    }
                  })}
                </dd>
              </div>
            </dl>
          </S.Content>

          <S.Content>
            <h3>경력 정보</h3>
            <dl>
              <div>
                <dt>자격증</dt>
                {manager_license !== '기타' && <dd>{manager_license}</dd>}
                {manager_license === '기타' && <dd>{manager_license_etc}</dd>}
              </div>

              <div>
                <dt>본업여부</dt>
                {!main_job_etc && !main_job && <dd>아님</dd>}
                {main_job_etc && <dd>{main_job_etc}</dd>}
              </div>

              <div>
                <dt>자차 운전여부</dt>
                <dd>{manager_drive ? '있음' : '없음'}</dd>
              </div>

              <div>
                <dt>현장경험</dt>
                <dd>{field_experience.slice(0, 150)}</dd>
              </div>
            </dl>
          </S.Content>
        </S.InputContents>

        <U.ButtonGrop className="button-group">
          <button type="button" onClick={() => setIsSubmitClicked(false)}>
            수정할래요.
          </button>
          <button type="button" onClick={submitHandler}>
            네, 맞아요!
          </button>
        </U.ButtonGrop>
      </div>
    </S.CheckModal>
  );
}

export default CheckModal;
