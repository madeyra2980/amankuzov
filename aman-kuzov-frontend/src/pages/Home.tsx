import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { COLORS, APP_STRINGS } from '../utils/constants';

const HomeContainer = styled.div`
  min-height: 100vh;
  background: ${COLORS.background};
  padding: 24px;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const LogoContainer = styled.div`
  background: linear-gradient(135deg, ${COLORS.primaryGreen}, ${COLORS.darkGreen});
  border-radius: 20px;
  padding: 40px 20px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0, 200, 83, 0.3);
`;

const LogoIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${COLORS.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 40px;
`;

const AppTitle = styled.h1`
  color: ${COLORS.white};
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const AppDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  margin-bottom: 0;
`;

const WelcomeTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${COLORS.black};
  margin-bottom: 16px;
`;

const WelcomeSubtitle = styled.p`
  font-size: 16px;
  color: ${COLORS.grey};
  margin-bottom: 60px;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 60px;
`;

const MainButton = styled.button`
  width: 100%;
  height: 60px;
  background: linear-gradient(135deg, ${COLORS.primaryGreen}, ${COLORS.darkGreen});
  color: ${COLORS.white};
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 4px 15px rgba(0, 200, 83, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 200, 83, 0.4);
  }
`;

const SecondaryButton = styled.button`
  width: 100%;
  height: 60px;
  background: transparent;
  color: ${COLORS.primaryGreen};
  border: 2px solid ${COLORS.primaryGreen};
  border-radius: 16px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  &:hover {
    background: ${COLORS.primaryGreen};
    color: ${COLORS.white};
  }
`;

const FeaturesContainer = styled.div`
  background: ${COLORS.white};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(0, 200, 83, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: ${COLORS.primaryGreen};
  font-size: 20px;
`;

const FeatureText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.black};
  flex: 1;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleTakePhoto = () => {
    navigate('/camera');
  };

  const handleSelectFromGallery = () => {
    navigate('/camera');
  };

  return (
    <HomeContainer>
      <Content>
        <LogoContainer>
          <LogoIcon>🚗</LogoIcon>
          <AppTitle>{APP_STRINGS.appName}</AppTitle>
          <AppDescription>{APP_STRINGS.appDescription}</AppDescription>
        </LogoContainer>

        <WelcomeTitle>{APP_STRINGS.welcomeTitle}</WelcomeTitle>
        <WelcomeSubtitle>{APP_STRINGS.welcomeSubtitle}</WelcomeSubtitle>

        <ButtonContainer>
          <MainButton onClick={handleTakePhoto}>
            📸 {APP_STRINGS.takePhoto}
          </MainButton>
          <SecondaryButton onClick={handleSelectFromGallery}>
            🖼️ {APP_STRINGS.selectFromGallery}
          </SecondaryButton>
        </ButtonContainer>

        <FeaturesContainer>
          <FeatureItem>
            <FeatureIcon>🤖</FeatureIcon>
            <FeatureText>ИИ анализ состояния автомобиля</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>👁️</FeatureIcon>
            <FeatureText>Обнаружение царапин, вмятин и ржавчины</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>💡</FeatureIcon>
            <FeatureText>Персональные рекомендации для водителя и пассажира</FeatureText>
          </FeatureItem>
        </FeaturesContainer>
      </Content>
    </HomeContainer>
  );
};

export default Home;
