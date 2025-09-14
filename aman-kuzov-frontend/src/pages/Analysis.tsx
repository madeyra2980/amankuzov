import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAnalysis } from '../services/AnalysisContext';
import { COLORS, APP_STRINGS } from '../utils/constants';

const AnalysisContainer = styled.div`
  min-height: 100vh;
  background: ${COLORS.background};
  padding: 24px;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.div`
  background: ${COLORS.primaryGreen};
  color: ${COLORS.white};
  padding: 20px;
  border-radius: 16px 16px 0 0;
  margin-bottom: 0;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const ImagePreview = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid ${COLORS.lightGrey};
  border-radius: 50%;
  border-top-color: ${COLORS.primaryGreen};
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 24px;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.primaryGreen};
  margin-bottom: 16px;
`;

const LoadingSubtext = styled.p`
  font-size: 16px;
  color: ${COLORS.grey};
  margin-bottom: 40px;
`;

const ProgressSteps = styled.div`
  background: ${COLORS.white};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const StepItem = styled.div<{ completed: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StepIcon = styled.div<{ completed: boolean }>`
  width: 24px;
  height: 24px;
  background: ${props => props.completed ? COLORS.primaryGreen : COLORS.lightGrey};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${COLORS.white};
  font-size: 16px;
`;

const StepText = styled.p<{ completed: boolean }>`
  font-size: 14px;
  color: ${props => props.completed ? COLORS.black : COLORS.grey};
  font-weight: ${props => props.completed ? '600' : 'normal'};
  flex: 1;
  text-align: left;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

const ErrorIcon = styled.div`
  width: 120px;
  height: 120px;
  background: rgba(244, 67, 54, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  color: ${COLORS.error};
  font-size: 60px;
`;

const ErrorTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.error};
  margin-bottom: 16px;
`;

const ErrorText = styled.p`
  font-size: 16px;
  color: ${COLORS.grey};
  margin-bottom: 40px;
  text-align: center;
`;

const ButtonContainer = styled.div`
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

const Analysis: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, analyzeImage, retry } = useAnalysis();
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const imageFile = location.state?.imageFile;
    if (imageFile) {
      // Create URL for the image
      const url = URL.createObjectURL(imageFile);
      setImageUrl(url);
      
      // Start analysis
      analyzeImage(imageFile);
    } else {
      // No image provided, redirect to camera
      navigate('/camera');
    }

    // Cleanup URL when component unmounts
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [location.state, analyzeImage, navigate, imageUrl]);

  const handleRetry = () => {
    retry();
  };

  const handleBack = () => {
    navigate('/camera');
  };

  if (state.state === 'analyzing') {
    return (
      <AnalysisContainer>
        <Content>
          <Header>
            <Title>{APP_STRINGS.analyzing}</Title>
          </Header>

          <ImagePreview>
            {imageUrl && <Image src={imageUrl} alt="Car being analyzed" />}
          </ImagePreview>

          <LoadingContainer>
            <LoadingSpinner />
            <LoadingText>{APP_STRINGS.analyzing}</LoadingText>
            <LoadingSubtext>ИИ анализирует состояние вашего автомобиля...</LoadingSubtext>

            <ProgressSteps>
              <StepItem completed={true}>
                <StepIcon completed={true}>✓</StepIcon>
                <StepText completed={true}>Загрузка изображения</StepText>
              </StepItem>
              <StepItem completed={true}>
                <StepIcon completed={true}>✓</StepIcon>
                <StepText completed={true}>Обнаружение дефектов</StepText>
              </StepItem>
              <StepItem completed={true}>
                <StepIcon completed={true}>✓</StepIcon>
                <StepText completed={true}>Анализ чистоты</StepText>
              </StepItem>
              <StepItem completed={false}>
                <StepIcon completed={false}></StepIcon>
                <StepText completed={false}>Генерация рекомендаций</StepText>
              </StepItem>
            </ProgressSteps>
          </LoadingContainer>
        </Content>
      </AnalysisContainer>
    );
  }

  if (state.state === 'error') {
    return (
      <AnalysisContainer>
        <Content>
          <Header>
            <Title>{APP_STRINGS.errorOccurred}</Title>
          </Header>

          <ErrorContainer>
            <ErrorIcon>⚠️</ErrorIcon>
            <ErrorTitle>{APP_STRINGS.errorOccurred}</ErrorTitle>
            <ErrorText>{state.errorMessage}</ErrorText>

            <ButtonContainer>
              <SecondaryButton onClick={handleBack}>
                {APP_STRINGS.tryAgain}
              </SecondaryButton>
              <PrimaryButton onClick={handleRetry}>
                {APP_STRINGS.tryAgain}
              </PrimaryButton>
            </ButtonContainer>
          </ErrorContainer>
        </Content>
      </AnalysisContainer>
    );
  }

  if (state.state === 'completed' && state.analysis) {
    // Redirect to results page
    navigate('/results', { state: { analysis: state.analysis, imageFile: location.state?.imageFile } });
    return null;
  }

  return (
    <AnalysisContainer>
      <Content>
        <Header>
          <Title>Готов к анализу</Title>
        </Header>
        <div style={{ padding: '40px 0' }}>
          <div style={{ fontSize: '80px', color: COLORS.grey, marginBottom: '24px' }}>📷</div>
          <h2>Готов к анализу</h2>
        </div>
      </Content>
    </AnalysisContainer>
  );
};

export default Analysis;
