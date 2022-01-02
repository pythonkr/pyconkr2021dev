import React from 'react';
import { SessionInfo, SessionTitle, SessionInfoItem } from './index';
import SpeechToTextTable from '../../components/session/SpeechToTextTable';

const SpeechToText = () => {
  return (
    <>
      <SessionInfo>
        <SessionTitle>문자통역 안내</SessionTitle>
        <SessionInfoItem>
          파이콘 한국 2021 에서는 보다 다양한 배경을 가진 사람들이 행사에 참석할
          수 있도록 문자통역 서비스를 제공합니다. 해당 서비스를 이용하기
          위해서는 아래 쉐어타이핑 플랫폼 접속 정보를 이용하여 해당 플랫폼에
          접속하여야 합니다.
        </SessionInfoItem>
        <SessionInfoItem>
          이번 파이콘 한국 행사는 모든 영상을 녹화하여 유튜브 프리미어를 통해
          송출합니다. 그렇기 때문에 문자 통역사분과 딜레이가 있을 수 있으며,
          실제 발표 영상과 문자 통역 내용 사이에도 딜레이가 발생할 수 있습니다.
        </SessionInfoItem>
        <SessionInfoItem>
          <SpeechToTextTable />
        </SessionInfoItem>
      </SessionInfo>
    </>
  );
};

export default SpeechToText;
