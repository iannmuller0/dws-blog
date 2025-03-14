import styled from "styled-components";
import convertPXToREM from "../../shared/utils/convertPxToRem";

interface IconHeader {
	isExpanded: boolean;
}

export const Header = styled.div<IconHeader>`
    display: flex;
    align-items: baseline;
    margin: 8px 0;

    @media (min-width: 1024px) {
        width: 100%;
    }
`;

export const HeaderText = styled(Header)<IconHeader>`
    h1,h2 {
        display: ${({ isExpanded }) => (isExpanded ? "none" : "block")};
        white-space: nowrap;
    }
    h1 {
        margin: 0;
    }

    @media (min-width: 1024px) {
        width: 70%;
    }
`;

export const H2 = styled.h2`
    font-weight: 400;
    font-size: ${convertPXToREM(15)};
    margin-left: 8px;
`;

export const Hr = styled.hr`
    background: ${({ theme }) => theme.colors.neutral.extraLight};
	border: 0;
    margin: 0 -6px 16px -6px;
    height: 1px;

    @media (min-width: 1024px) {
        margin: 0 -16px 16px -16px;
    }
    
`;

export const FlexWrapper = styled.div`
    display: flex;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        padding: 20px;
    }
`;
