import { NavHeader } from '../components';
import { LargeScreenWrapper } from '../components/LargeScreenWrapper';

export const Disclaimer = () => {
  return (
    <LargeScreenWrapper>
      <NavHeader>Disclaimer</NavHeader>
      <div className="container" aria-label="disclaimer text">
        <p>
          The calculations provided by this application are intended for
          informational purposes only and should not be relied upon as
          professional engineering advice. While every effort has been made to
          ensure the accuracy of the calculations, we do not guarantee their
          completeness, correctness, or suitability for any specific purpose.
        </p>
        <p>
          It is important to note that engineering calculations can involve
          complex variables and considerations, and there may be factors that
          are not accounted for in this application. Users are advised to
          independently verify the results and consult with a qualified
          professional engineer for any critical or safety-related applications.
        </p>
        <p>
          By using this application, you acknowledge that the calculations are
          provided as-is without any warranty or representation of accuracy or
          reliability. The developers and operators of this application shall
          not be held liable for any damages or losses resulting from the use of
          the calculations or reliance on the information provided.
        </p>
        <p>
          Please use caution and exercise your professional judgment when
          interpreting the results and making decisions based on them. If you
          have any doubts or concerns about the accuracy of the calculations, it
          is recommended to seek guidance from a licensed professional engineer.
        </p>
      </div>
    </LargeScreenWrapper>
  );
};
