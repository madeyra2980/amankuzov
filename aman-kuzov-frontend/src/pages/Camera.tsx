import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { COLORS, APP_STRINGS } from '../utils/constants';

const CameraContainer = styled.div`
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

const CameraIcon = styled.div`
  width: 120px;
  height: 120px;
  background: rgba(0, 200, 83, 0.1);
  border: 3px solid ${COLORS.primaryGreen};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto 32px;
  font-size: 60px;
  color: ${COLORS.primaryGreen};
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${COLORS.grey};
  margin-bottom: 60px;
  line-height: 1.5;
`;

const InstructionsContainer = styled.div`
  background: ${COLORS.white};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const InstructionsTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.black};
  margin-bottom: 16px;
`;

const InstructionIcon = styled.div`
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

const TipItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TipDot = styled.div`
  width: 6px;
  height: 6px;
  background: ${COLORS.primaryGreen};
  border-radius: 50%;
  margin-top: 8px;
  margin-right: 12px;
  flex-shrink: 0;
`;

const TipText = styled.p`
  font-size: 14px;
  color: ${COLORS.black};
  text-align: left;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const HiddenInput = styled.input`
  display: none;
`;

const Camera: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTakePhoto = () => {
    // In a real app, this would open the camera
    // For now, we'll trigger the file input
    fileInputRef.current?.click();
  };

  const handleSelectFromGallery = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Navigate to analysis with the selected file
      navigate('/analysis', { state: { imageFile: file } });
    }
  };

  return (
    <CameraContainer>
      <Content>
        <Header>
          <Title>{APP_STRINGS.cameraTitle}</Title>
        </Header>

        <CameraIcon>📸</CameraIcon>

        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
          {APP_STRINGS.cameraTitle}
        </h2>

        <Subtitle>{APP_STRINGS.cameraSubtitle}</Subtitle>

        <InstructionsContainer>
          <InstructionsTitle>
            <InstructionIcon>💡</InstructionIcon>
            Советы для лучшего результата:
          </InstructionsTitle>
          
          <TipItem>
            <TipDot />
            <TipText>Снимайте при хорошем освещении</TipText>
          </TipItem>
          <TipItem>
            <TipDot />
            <TipText>Убедитесь, что автомобиль полностью в кадре</TipText>
          </TipItem>
          <TipItem>
            <TipDot />
            <TipText>Избегайте теней и бликов</TipText>
          </TipItem>
          <TipItem>
            <TipDot />
            <TipText>Снимайте с разных углов для полного анализа</TipText>
          </TipItem>
        </InstructionsContainer>

        <ButtonContainer>
          <MainButton onClick={handleTakePhoto} disabled={isLoading}>
            {isLoading ? '⏳' : '📸'} {APP_STRINGS.takePhoto}
          </MainButton>
          <SecondaryButton onClick={handleSelectFromGallery} disabled={isLoading}>
            {isLoading ? '⏳' : '🖼️'} {APP_STRINGS.selectFromGallery}
          </SecondaryButton>
        </ButtonContainer>

        <HiddenInput
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
        />
      </Content>
    </CameraContainer>
  );
};

export default Camera;
