import styled from "styled-components";
import convertPXToREM from "../../shared/utils/convertPxToRem";

interface IconHeader {
	isExpanded: boolean;
}

export const Header = styled.div<IconHeader>`
    display: flex;
    align-items: baseline;
    margin: 8px 0;
`;

export const HeaderText = styled(Header)<IconHeader>`
    h1,h2 {
        display: ${({ isExpanded }) => (isExpanded ? "none" : "block")};
        white-space: nowrap;
    }
    h1 {
        margin: 0;
    }
`;

export const H2 = styled.h2`
    font-weight: 400;
    font-size: ${convertPXToREM(15)};
    margin-left: 8px;
`;

export const Hr = styled.hr`
    background: ${({ theme }) => theme.colors.neutral.light};
	border: 0;
    margin: 0 -6px 16px -6px;
    height: 1px;
`;

export const FlexWrapper = styled.div`
    display: flex;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
