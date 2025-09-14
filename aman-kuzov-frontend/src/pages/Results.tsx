import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { CarAnalysis } from '../types';
import { COLORS, APP_STRINGS, MESSAGES } from '../utils/constants';

const ResultsContainer = styled.div`
  min-height: 100vh;
  background: ${COLORS.background};
  padding: 24px;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Header = styled.div`
  background: ${COLORS.primaryGreen};
  color: ${COLORS.white};
  padding: 20px;
  border-radius: 16px 16px 0 0;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const RefreshButton = styled.button`
  background: transparent;
  border: 2px solid ${COLORS.white};
  color: ${COLORS.white};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background: ${COLORS.white};
    color: ${COLORS.primaryGreen};
  }
`;

const ImagePreview = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SummaryCard = styled.div`
  background: linear-gradient(135deg, ${COLORS.primaryGreen}, ${COLORS.darkGreen});
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 10px 30px rgba(0, 200, 83, 0.3);
`;

const SummaryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SummaryIcon = styled.div`
  font-size: 32px;
  margin-right: 16px;
`;

const SummaryTitle = styled.h2`
  color: ${COLORS.white};
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  flex: 1;
`;

const SummaryCondition = styled.p`
  color: ${COLORS.white};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const RecommendationCard = styled.div`
  background: ${COLORS.white};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const RecommendationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const RecommendationIcon = styled.div`
  font-size: 24px;
  margin-right: 12px;
`;

const RecommendationTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.black};
  margin: 0;
`;

const RecommendationMessage = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.black};
  margin-bottom: 8px;
`;

const RecommendationDetails = styled.p`
  font-size: 14px;
  color: ${COLORS.grey};
  margin: 0;
`;

const DetailedAnalysis = styled.div`
  background: ${COLORS.white};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const AnalysisTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.black};
  margin-bottom: 16px;
`;

const AnalysisItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const AnalysisLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.black};
`;

const AnalysisValue = styled.span<{ color: string }>`
  background: ${props => props.color}20;
  color: ${props => props.color};
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const Button = styled.button`
  flex: 1;
  height: 50px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const PrimaryButton = styled(Button)`
  background: ${COLORS.primaryGreen};
  color: ${COLORS.white};

  &:hover {
    background: ${COLORS.darkGreen};
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${COLORS.primaryGreen};
  border: 2px solid ${COLORS.primaryGreen};

  &:hover {
    background: ${COLORS.primaryGreen};
    color: ${COLORS.white};
  }
`;

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [analysis, setAnalysis] = useState<CarAnalysis | null>(null);

  useEffect(() => {
    const { analysis: analysisData, imageFile } = location.state;
    
    if (!analysisData) {
      navigate('/');
      return;
    }

    setAnalysis(analysisData);

    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setImageUrl(url);
    }

    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [location.state, navigate, imageUrl]);

  const handleRetakePhoto = () => {
    navigate('/camera');
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    alert('Функция поделиться в разработке');
  };

  const getConditionIcon = (isClean: boolean, isIntact: boolean) => {
    if (isClean && isIntact) return '✅';
    if (isClean && !isIntact) return '🔧';
    if (!isClean && isIntact) return '🧽';
    return '⚠️';
  };

  const getConditionTitle = (isClean: boolean, isIntact: boolean) => {
    if (isClean && isIntact) return 'Отличное состояние';
    if (isClean && !isIntact) return 'Требует ремонта';
    if (!isClean && isIntact) return 'Нужна мойка';
    return 'Требует внимания';
  };

  const getDriverMessage = (isClean: boolean, isIntact: boolean) => {
    if (isClean && isIntact) return MESSAGES.driver.cleanIntact;
    if (isClean && !isIntact) return MESSAGES.driver.cleanDamaged;
    if (!isClean && isIntact) return MESSAGES.driver.dirtyIntact;
    return MESSAGES.driver.dirtyDamaged;
  };

  const getPassengerMessage = (isClean: boolean, isIntact: boolean) => {
    if (isClean && isIntact) return MESSAGES.passenger.cleanIntact;
    if (isClean && !isIntact) return MESSAGES.passenger.cleanDamaged;
    if (!isClean && isIntact) return MESSAGES.passenger.dirtyIntact;
    return MESSAGES.passenger.dirtyDamaged;
  };

  if (!analysis) {
    return (
      <ResultsContainer>
        <Content>
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: '80px', color: COLORS.grey, marginBottom: '24px' }}>📊</div>
            <h2>Загрузка результатов...</h2>
          </div>
        </Content>
      </ResultsContainer>
    );
  }

  const { classification } = analysis;
  const { isClean = false, isIntact = false } = classification?.summary || {};
  const driverMessage = getDriverMessage(isClean, isIntact);
  const passengerMessage = getPassengerMessage(isClean, isIntact);

  return (
    <ResultsContainer>
      <Content>
        <Header>
          <Title>{APP_STRINGS.analysisComplete}</Title>
          <RefreshButton onClick={() => navigate('/camera')}>
            🔄 Переснять
          </RefreshButton>
        </Header>

        <ImagePreview>
          {imageUrl && <Image src={imageUrl} alt="Analyzed car" />}
        </ImagePreview>

        <SummaryCard>
          <SummaryHeader>
            <SummaryIcon>{getConditionIcon(isClean, isIntact)}</SummaryIcon>
            <SummaryTitle>{getConditionTitle(isClean, isIntact)}</SummaryTitle>
          </SummaryHeader>
          <SummaryCondition>
            {isClean ? 'Чистая' : 'Грязная'} + {isIntact ? 'Целая' : 'Побитая'}
          </SummaryCondition>
        </SummaryCard>

        <RecommendationCard>
          <RecommendationHeader>
            <RecommendationIcon>👨‍💼</RecommendationIcon>
            <RecommendationTitle>{APP_STRINGS.forDriver}</RecommendationTitle>
          </RecommendationHeader>
          <RecommendationMessage>{driverMessage.message}</RecommendationMessage>
          <RecommendationDetails>{driverMessage.details}</RecommendationDetails>
        </RecommendationCard>

        <RecommendationCard>
          <RecommendationHeader>
            <RecommendationIcon>👥</RecommendationIcon>
            <RecommendationTitle>{APP_STRINGS.forPassenger}</RecommendationTitle>
          </RecommendationHeader>
          <RecommendationMessage>{passengerMessage.message}</RecommendationMessage>
          <RecommendationDetails>{passengerMessage.details}</RecommendationDetails>
        </RecommendationCard>

        <DetailedAnalysis>
          <AnalysisTitle>Детальный анализ</AnalysisTitle>
          <AnalysisItem>
            <AnalysisLabel>Общая оценка</AnalysisLabel>
            <AnalysisValue color={COLORS.primaryGreen}>
              {Math.round((classification.overallScore || 0) * 100)}%
            </AnalysisValue>
          </AnalysisItem>
          <AnalysisItem>
            <AnalysisLabel>Чистота</AnalysisLabel>
            <AnalysisValue color={COLORS.info}>
              {Math.round((classification.cleanliness?.score || 0) * 100)}%
            </AnalysisValue>
          </AnalysisItem>
          <AnalysisItem>
            <AnalysisLabel>Целостность</AnalysisLabel>
            <AnalysisValue color={COLORS.warning}>
              {Math.round((classification.integrity?.score || 0) * 100)}%
            </AnalysisValue>
          </AnalysisItem>
          <AnalysisItem>
            <AnalysisLabel>Обнаружено дефектов</AnalysisLabel>
            <AnalysisValue color={COLORS.error}>
              {analysis.totalDefects || 0}
            </AnalysisValue>
          </AnalysisItem>
        </DetailedAnalysis>

        <ActionButtons>
          <SecondaryButton onClick={handleRetakePhoto}>
            📸 {APP_STRINGS.retakePhoto}
          </SecondaryButton>
          <PrimaryButton onClick={handleShare}>
            📤 {APP_STRINGS.shareResult}
          </PrimaryButton>
        </ActionButtons>
      </Content>
    </ResultsContainer>
  );
};

export default Results;
