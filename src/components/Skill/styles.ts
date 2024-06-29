import styled from 'styled-components';

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  margin-bottom: 24px;
`;

export const IconWrapper = styled.div`
  font-size: 2rem; 
  margin-bottom: 8px; 
  
  &:hover + div {
    opacity: 1;
    visibility: visible;
  }
`;

export const TextWrapper = styled.div`
    font-size: 1rem; 
    position: absolute;
    top: 100%;
    white-space: nowrap;
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease, visibility 0.3s ease;
`;
