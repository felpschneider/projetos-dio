package dioBank;

import java.util.Scanner;

public class CaixaEletrônico {

	private Scanner scanner = new Scanner(System.in);

	boolean continuar = true;

	Cliente cliente1 = new Cliente();

	int opcao = 0;
	
	private String nome = "";
	
	private void interfaceCaixa() {
		do {
			System.out.println("||| Olá! Seja bem-vindo ao DioBank! |||");
			System.out.println("Selecione uma opção para continuar:");
			System.out.println("1 - Criar conta corrente");
			System.out.println("2 - Criar conta poupança");
			System.out.println("3 - Imprimir saldo");
			System.out.println("4 - Depositar dinheiro");
			System.out.println("5 - Sacar dinheiro");
			System.out.println("6 - Cancelar operação");
			
			scanner.nextInt(opcao);
			
			if(opcao == 1) {
				System.out.println("Digite seu nome:");
				
				scanner.next(nome);
				
				
				cliente1.setNome(nome);
				
				Conta contaCorrente= new ContaCorrente(cliente1);
			}
			
			if(opcao == 2) {
				System.out.println("Digite seu nome:");
				
				scanner.next(nome);
				
				if(!cliente1.getNome().equals(nome)) {
					cliente1.setNome(nome);
					Conta contaPoupanca = new ContaPoupanca(cliente1);
				}
				else {
					Cliente cliente2 = new Cliente();
					cliente2.setNome(nome);
				}
			}
			
			
			
			
		} while (continuar);
	}

}
