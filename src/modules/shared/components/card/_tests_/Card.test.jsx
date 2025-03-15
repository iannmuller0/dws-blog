/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "..";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

//configurar vitetest.config pra rodar com theme provider

vi.mock("../../utils/removeName", () => ({
	default: vi.fn(() => "Autor Mockado"),
}));

vi.mock("./components/tag/tag", () => ({
	default: ({ text }) => <div data-testid="tag">{text}</div>,
}));

describe("Card Component", () => {
	const defaultProps = {
		img: "test-image.jpg",
		title: "Título do Post",
		description: "Descrição do post de teste",
		date: "2023-10-15T00:00:00",
		autorName: "Autor Original",
		categories: [
			{
				id: "1",
				name: "Tecnologia",
			},
			{
				id: "2",
				name: "Programaçao",
			},
		],
		onClick: vi.fn(),
	};

	afterEach(() => {
		vi.clearAllMocks();
	});

	it("deve renderizar todos os elementos corretamente", () => {
		render(
				<Card {...defaultProps} />
		);

		expect(screen.getByAltText("post")).toHaveAttribute(
			"src",
			"test-image.jpg",
		);
		expect(screen.getByText("Título do Post")).toBeInTheDocument();
		expect(screen.getByText("Descrição do post de teste")).toBeInTheDocument();
		expect(screen.getByText("Autor Mockado")).toBeInTheDocument();
		expect(screen.getAllByTestId("tag")).toHaveLength(2);
	});

	it("deve formatar a data corretamente em português", () => {
		render(<Card {...defaultProps} />);

		const formattedDate = format(new Date(defaultProps.date), "MMM dd, yyyy", {
			locale: ptBR,
		});
		expect(screen.getByText(formattedDate)).toBeInTheDocument();
	});

	it("deve chamar onClick quando clicado", () => {
		render(<Card {...defaultProps} />);
		fireEvent.click(screen.getByRole("article"));
		expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
	});
});
