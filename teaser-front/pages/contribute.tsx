import FundingPyconkit from '../components/contribute/FundingPyconkit';
import GotoContribute from '../components/contribute/GotoContribute';
import MakePyCon from '../components/contribute/MakePyCon';

export default function contribute() {
  return (
    <>
      <GotoContribute />
      <FundingPyconkit />
      <MakePyCon />
    </>
  );
}
