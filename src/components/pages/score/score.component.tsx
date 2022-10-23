import ScoreCardComponent from '../../molecules/scorecard/scorecard.component';
import ScoreCard from '../../molecules/scorecard/scorecard.component';
import ThemeSwitcher from '../../molecules/theme-switcher/theme-switcher.component';
import { StyledMain, StyledH2, StyledThemeWrap } from './score.styles';

const ScorePage = () => (
  <>
    <StyledMain>
      <StyledThemeWrap>
        <StyledH2>Scorecard</StyledH2>
        <ThemeSwitcher />
      </StyledThemeWrap>
      <ScoreCardComponent />
    </StyledMain>
  </>
);

export default ScorePage;
