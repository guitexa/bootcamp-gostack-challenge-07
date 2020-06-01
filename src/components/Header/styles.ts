import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  page: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        padding-bottom: 10px;

        &:nth-child(1) {
          border-bottom: 3px solid
            ${({ page }) => (page === 'dashboard' ? '#ff872c' : 'transparent')};
          opacity: ${({ page }) => (page === 'dashboard' ? '1' : '0.8')};
        }

        &:nth-child(2) {
          border-bottom: 3px solid
            ${({ page }) => (page === 'import' ? '#ff872c' : 'transparent')};
          opacity: ${({ page }) => (page === 'import' ? '1' : '0.8')};
        }

        & + a {
          margin-left: 32px;
        }

        &:hover {
          border-bottom: 3px solid #ff872c;
          opacity: 1;
        }
      }
    }
  }
`;
