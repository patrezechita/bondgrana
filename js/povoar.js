function povoaBancoDeDados() {
    
    if (meubd) {
    
        meubd.transaction(function (t) {
        
            t.executeSql("INSERT INTO entrada (nome, valor, categoria, data) VALUES " +
                   
                "('Gasolina', -120.00, 'Carro', '2014-06-02')," +
                "('Salário', 1800.00, 'Emprego', '2014-06-05')," +
                "('Comper', -120.00, 'Alimentos', '2014-06-06')," +
                "('Conta de Luz', -80.00, 'Luz', '2014-06-08')," +
                "('Conta de Água', -60.00, 'Água', '2014-06-08')," +
                "('Conta Telefone', -50.00, 'Telefone', '2014-06-08')," +
                "('Conta Internet', -50.00, 'Internet', '2014-06-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2014-06-10')," +
                "('Cinema', -45.00, 'Entretenimento', '2014-06-14')," +
                "('Restaurante', -50.00, 'Entretenimento', '2014-06-16')," +
                "('Padaria', -10.00, 'Alimentos', '2014-06-17')," +
                "('Gasolina', -150.00, 'Carro', '2014-06-19')," +
                "('Teatro', -80.00,'Entretenimento','2014-06-20')," +

                "('Salário', 1950.00, 'Emprego', '2014-07-05')," +
                "('Wal-mart', -150.00, 'Alimentos', '2014-07-05')," +
                "('Gasolina', -136.00, 'Carro', '2014-07-07')," +
                "('Conta de Luz', -68.00, 'Luz', '2014-07-08')," +
                "('Conta de Água', -58.00, 'Água', '2014-07-08')," +
                "('Conta Telefone', -45.00, 'Telefone', '2014-07-08')," +
                "('Padaria', -15.00, 'Alimentos', '2014-07-09')," +
                "('Conta Internet', -50.00, 'Internet', '2014-07-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2014-07-10')," +
                "('Cinema', -22.50, 'Entretenimento', '2014-07-12')," +
                "('Subway', -28.75, 'Entretenimento', '2014-07-16')," +
                "('Padaria', -15.00, 'Alimentos', '2014-07-19')," +
                "('Gasolina', -150.00, 'Carro', '2014-07-25')," +

                "('Padaria', -24.30, 'Alimentos', '2014-08-01')," +
                "('Salário', 1875.00, 'Emprego', '2014-08-05')," +
                "('Gasolina', -103.25, 'Carro', '2014-08-06')," +
                "('Conta de Luz', -77.00, 'Luz', '2014-08-08')," +
                "('Conta de Água', -63.80, 'Água', '2014-08-08')," +
                "('Conta Telefone', -42.13, 'Telefone', '2014-08-08')," +
                "('Conta Internet', -50.00, 'Internet', '2014-08-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2014-08-10')," +
                "('Comper', -223.39, 'Alimentos', '2014-08-10')," +
                "('Cinema', -45.00, 'Entretenimento', '2014-08-14')," +
                "('Gasolina', -50.00, 'Carro', '2014-08-15')," +
                "('Cinema', -45.00, 'Entretenimento', '2014-08-16')," +
                "('Outback', -155.00, 'Entretenimento', '2014-08-16')," +
                "('Padaria', -9.50, 'Alimentos', '2014-08-17')," +
                "('Jogos', -200.00,'Entretenimento','2014-08-29')," +

                "('Salário', 1875.00, 'Emprego', '2014-09-05')," +
                "('Gasolina', -112.00, 'Carro', '2014-09-08')," +
                "('Conta de Luz', -70.00, 'Luz', '2014-09-08')," +
                "('Conta de Água', -65.90, 'Água', '2014-09-08')," +
                "('Conta Telefone', -40.67, 'Telefone', '2014-09-08')," +
                "('Conta Internet', -50.00, 'Internet', '2014-09-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2014-09-10')," +
                "('Padaria', -20.90, 'Alimentos', '2014-09-11')," +
                "('Cinema', -45.00, 'Entretenimento', '2014-09-14')," +
                "('Gasolina', -50.00, 'Carro', '2014-09-15')," +
                "('Comper', -250.76, 'Alimentos', '2014-09-15')," +
                "('Livros', -80.00, 'Entretenimento', '2014-09-16')," +
                "('Cinema', -22.50, 'Entretenimento', '2014-09-18')," +
                "('Board Games', -89.90,'Entretenimento','2014-09-20')," +
                "('Padaria', -15.00, 'Entretenimeto', '2014-09-23')," +

                "('Comper', -55.00, 'Alimentos', '2014-10-03')," +
                "('Salário', 2025.00, 'Emprego', '2014-10-05')," +
                "('Gasolina', -80.00,'Carro', '2014-10-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2014-10-08')," +
                "('Conta de Água', -56.80, 'Água', '2014-10-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2014-10-08')," +
                "('Conta Internet', -50.00, 'Internet', '2014-10-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2014-10-10')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2014-10-12')," +
                "('Cinema', -45.00, 'Entretenimento', '2014-10-14')," +
                "('Gasolina', -50.00, 'Carro', '2014-10-15')," +
                "('McDonalds', -25.50, 'Entretenimento', '2014-10-17')," +
                "('Padaria', -9.50, 'Alimentos', '2014-10-17')," +
                "('Burguer King', -23.50, 'Entretenimento', '2014-10-22')," +
                "('Jogos', -200.00,'Entretenimento','2014-10-29')," +

                "('Comper', -120.00, 'Alimentos', '2014-11-01')," +
                "('Salário', 1800.00, 'Emprego', '2014-11-05')," +
                "('Gasolina', -80.00,'Carro', '2014-11-07')," +
                "('Conta de Luz', -90.67, 'Luz', '2014-11-08')," +
                "('Conta de Água', -67.50, 'Água', '2014-11-08')," +
                "('Conta Telefone', -32.90, 'Telefone', '2014-11-08')," +
                "('Conta Internet', -50.00, 'Internet', '2014-11-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2014-11-10')," +
                "('Cinema', -45.00, 'Entretenimento', '2014-11-14')," +
                "('Gasolina', -50.00, 'Carro', '2014-11-15')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2014-11-12')," +
                "('Padaria', -9.50, 'Alimentos', '2014-11-17')," +
                "('Burguer King', -23.50, 'Entretenimento', '2014-11-22')," +
                "('Roupas', -145.76, 'Gastos Pessoais', '2014-11-25')," +

                "('Comper', -55.00, 'Alimentos', '2014-12-03')," +
                "('Salário', 2200.00, 'Emprego', '2014-12-05')," +
                "('13º Salário', 1900.00, 'Emprego', '2014-12-05')," +
                "('Gasolina', -80.00,'Carro', '2014-12-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2014-12-08')," +
                "('Conta de Água', -56.80, 'Água', '2014-12-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2014-12-08')," +
                "('Conta Internet', -50.00, 'Internet', '2014-12-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2014-12-10')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2014-12-12')," +
                "('Presentes', -525.70, 'Gastos Pessoais', '2014-12-15')," +

                "('Comper', -33.00, 'Alimentos', '2015-01-03')," +
                "('Salário', 2150.00, 'Emprego', '2015-01-05')," +
                "('IPVA', -237.00 ,'Carro', '2015-01-06')," +
                "('Gasolina', -96.00,'Carro', '2015-01-07')," +
                "('Conta de Luz', -68.00, 'Luz', '2015-01-08')," +
                "('Conta de Água', -55.30, 'Água', '2015-01-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2015-01-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-01-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-01-10')," +
                "('IPTU', -750.00 ,'Casa', '2015-01-15')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2015-01-18')," +

                "('Comper', -50.00, 'Alimentos', '2015-02-03')," +
                "('Salário', 3000.00, 'Emprego', '2015-02-05')," +
                "('Gasolina', -66.00,'Carro', '2015-02-07')," +
                "('Conta de Luz', -52.30, 'Luz', '2015-02-08')," +
                "('Conta de Água', -60.50, 'Água', '2015-02-08')," +
                "('Conta Telefone', -34.70, 'Telefone', '2015-02-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-02-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-02-10')," +
                "('Wal-mart', -360.00, 'Alimentos', '2015-02-12')," +
                "('Pintura da casa', -1000.00, 'Casa', '2015-02-20')," +
                "('Gasolina', -66.00, 'Carro', '2015-02-23')," +
                "('McDonalds', -55.00, 'Entretenimento', '2015-02-25')," +
                "('Cinema', -45.00, 'Entretenimento', '2015-02-29')," +

                "('Comper', -33.00, 'Alimentos', '2015-03-03')," +
                "('Salário', 2800.00, 'Emprego', '2015-03-05')," +
                "('Gasolina', -100.00,'Carro', '2015-03-07')," +
                "('Conta de Luz', -65.80, 'Luz', '2015-03-08')," +
                "('Conta de Água', -50.55, 'Água', '2015-03-08')," +
                "('Conta Telefone', -37.80, 'Telefone', '2015-03-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-03-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-03-10')," +
                "('Pão de Açúcar', -400.00, 'Alimentos', '2015-03-12')," +
                "('Subway', -18.00, 'Entretenimento', '2015-03-15')," +
                "('Gasolina', -66.00, 'Carro', '2015-03-18')," +

                "('Comper', -49.00, 'Alimentos', '2015-04-03')," +
                "('Salário', 2950.00, 'Emprego', '2015-04-05')," +
                "('Gasolina', -98.00,'Carro', '2015-04-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2015-04-08')," +
                "('Conta de Água', -56.80, 'Água', '2015-04-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2015-04-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-04-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-04-10')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2015-04-12')," +
                "('Cinema', -45.00,'Entretenimento', '2015-04-15')," +
                "('Gasolina', -66.00,'Carro', '2015-04-18')," +
                "('Cinema', -45.00,'Entretenimento', '2015-04-20')," +

                "('Comper', -50.00, 'Alimentos', '2015-05-03')," +
                "('Salário', 2730.00, 'Emprego', '2015-05-05')," +
                "('Gasolina', -100.00,'Carro', '2015-05-07')," +
                "('Conta de Luz', -90.00, 'Luz', '2015-05-08')," +
                "('Conta de Água', -66.80, 'Água', '2015-05-08')," +
                "('Conta Telefone', -40.90, 'Telefone', '2015-05-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-05-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-05-10')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2015-05-12')," +
                "('Cinema', -45.00,'Entretenimento', '2015-05-20')," +
                "('Gasolina', -150.00,'Carro', '2015-05-22')," +

                "('Comper', -55.00, 'Alimentos', '2015-06-03')," +
                "('Salário', 2550.00, 'Emprego', '2015-06-05')," +
                "('Gasolina', -80.00,'Carro', '2015-06-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2015-06-08')," +
                "('Conta de Água', -56.80, 'Água', '2015-06-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2015-06-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-06-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-06-10')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2015-06-12')," +
                "('Steam', -150.00,'Gastos Pessoais', '2015-06-15')," +
                "('Cinema', -45.00,'Entretenimento', '2015-06-20')," +

                "('Comper', -55.00, 'Alimentos', '2015-07-03')," +
                "('Salário', 2670.00, 'Emprego', '2015-07-05')," +
                "('Gasolina', -80.00,'Carro', '2015-07-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2015-07-08')," +
                "('Conta de Água', -56.80, 'Água', '2015-07-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2015-07-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-07-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-07-10')," +
                "('Viagem', -3567.00, 'Gastos Pessoais', '2015-07-15')," +

                "('Comper', -55.00, 'Alimentos', '2015-08-03')," +
                "('Salário', 2550.00, 'Emprego', '2015-08-05')," +
                "('Celular Novo', -800.00, 'Gastos Pessoais', '2015-08-06')," +
                "('Gasolina', -80.00,'Carro', '2015-08-07')," +
                "('Conta de Luz', -89.76, 'Luz', '2015-08-08')," +
                "('Conta de Água', -57.00, 'Água', '2015-08-08')," +
                "('Conta Telefone', -40.90, 'Telefone', '2015-08-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-08-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-08-10')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2015-08-12')," +
                "('Cinema', -45.00, 'Entretenimento', '2015-08-20')," +
                "('Burguer King', -58.00, 'Alimentos', '2015-08-31')," +

                "('Comper', -55.00, 'Alimentos', '2015-09-03')," +
                "('Salário', 2900.00, 'Emprego', '2015-09-05')," +
                "('Gasolina', -80.00,'Carro', '2015-09-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2015-09-08')," +
                "('Conta de Água', -56.80, 'Água', '2015-09-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2015-09-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-09-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-09-10')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2015-09-12')," +
                "('Placa de Vídeo', -1000.00,'Gastos Pessoais', '2015-09-15')," +
                "('Teatro', -120.00, 'Entretenimento', '2015-08-20')," +
                "('Burguer King', -58.00, 'Alimentos', '2015-08-31')," +

                "('Comper', -55.00, 'Alimentos', '2015-10-03')," +
                "('Salário', 2870.00, 'Emprego', '2015-10-05')," +
                "('Gasolina', -80.00,'Carro', '2015-10-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2015-10-08')," +
                "('Conta de Água', -56.80, 'Água', '2015-10-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2015-10-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-10-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-10-10')," +
                "('Presentes', -78.90, 'Gastos Pessoais', '2015-10-10')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2015-10-12')," +
                "('Steam', -65.00,'Gastos Pessoais', '2015-10-15')," +
                "('Cinema', -45.00,'Entretenimento', '2015-10-20')," +
                "('Outback', -250.00, 'Gastos Pessoais', '2015-10-28')," +

                "('Comper', -55.00, 'Alimentos', '2015-11-03')," +
                "('Salário', 3100.00, 'Emprego', '2015-11-05')," +
                "('Gasolina', -80.00,'Carro', '2015-11-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2015-11-08')," +
                "('Conta de Água', -56.80, 'Água', '2015-11-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2015-11-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-11-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-11-10')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2015-11-12')," +
                "('Cinema', -45.00,'Entretenimento', '2015-11-20')," +

                "('Comper', -55.00, 'Alimentos', '2015-12-03')," +
                "('Salário', 3200.00, 'Emprego', '2015-12-05')," +
                "('13º Salário', 1900.00, 'Emprego', '2015-12-05')," +
                "('Gasolina', -80.00,'Carro', '2015-12-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2015-12-08')," +
                "('Conta de Água', -56.80, 'Água', '2015-12-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2015-12-08')," +
                "('Conta Internet', -50.00, 'Internet', '2015-12-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2015-12-10')," +
                "('Pão de Açúcar', -215.00, 'Alimentos', '2015-12-12')," +
                "('Presentes', -725.90, 'Gastos Pessoais', '2015-12-15')," +

                "('Comper', -67.00, 'Alimentos', '2016-01-03')," +
                "('Salário', 3200.00, 'Emprego', '2016-01-05')," +
                "('IPVA', -500.00,'Carro', '2016-01-06')," +
                "('IPTU', -1500.00,'Carro', '2016-01-06')," +
                "('Gasolina', -90.00,'Carro', '2016-01-07')," +
                "('Conta de Luz', -190.00, 'Luz', '2016-01-08')," +
                "('Conta de Água', -50.30, 'Água', '2016-01-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2016-01-08')," +
                "('Conta Internet', -50.00, 'Internet', '2016-01-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2016-01-10')," +
                "('Pão de Açúcar', -218.00, 'Alimentos', '2016-01-18')," +

                "('Comper', -90.00, 'Alimentos', '2016-02-03')," +
                "('Salário', 2900.00, 'Emprego', '2016-02-05')," +
                "('Gasolina', -80.00,'Carro', '2016-02-07')," +
                "('Conta de Luz', -60.60, 'Luz', '2016-02-08')," +
                "('Conta de Água', -90.00, 'Água', '2016-02-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2016-02-08')," +
                "('Conta Internet', -50.00, 'Internet', '2016-02-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2016-02-10')," +
                "('Pão de Açúcar', -367.00, 'Alimentos', '2016-02-12')," +
                "('Roupas', -180.00,'Gastos Pessoais', '2016-02-15')," +
                "('Cinema', -45.00,'Entretenimento', '2016-02-20')," +
                "('Subway', -25.00, 'Gastos Pessoais', '2016-02-28')," +

                "('Comper', -55.00, 'Alimentos', '2016-03-03')," +
                "('Salário', 3000.00, 'Emprego', '2016-03-05')," +
                "('Gasolina', -80.00,'Carro', '2016-03-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2016-03-08')," +
                "('Conta de Água', -56.80, 'Água', '2016-03-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2016-03-08')," +
                "('Conta Internet', -50.00, 'Internet', '2016-03-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2016-03-10')," +
                "('Pão de Açúcar', -450.00, 'Alimentos', '2016-03-12')," +
                "('Steam', -55.00,'Gastos Pessoais', '2016-03-15')," +
                "('Cinema', -45.00,'Entretenimento', '2016-03-20')," +
                "('Vermelho grill', -300.00, 'Gastos Pessoais', '2016-03-28')," +

                "('Comper', -55.00, 'Alimentos', '2016-04-03')," +
                "('Salário', 3100.00, 'Emprego', '2016-04-05')," +
                "('Gasolina', -80.00,'Carro', '2016-04-07')," +
                "('Conta de Luz', -66.00, 'Luz', '2016-04-08')," +
                "('Conta de Água', -80.00, 'Água', '2016-04-08')," +
                "('Conta Telefone', -20.90, 'Telefone', '2016-04-08')," +
                "('Conta Internet', -50.00, 'Internet', '2016-04-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2016-04-10')," +
                "('Pão de Açúcar', -300.00, 'Alimentos', '2016-04-12')," +
                "('Computador novo', -5000.00,'Gastos Pessoais', '2016-04-15')," +
                "('Cinema', -45.00,'Entretenimento', '2016-04-20')," +
                "('Outback', -250.00, 'Gastos Pessoais', '2016-04-28')," +

                "('Comper', -55.00, 'Alimentos', '2016-05-03')," +
                "('Salário', 3200.00, 'Emprego', '2016-05-05')," +
                "('Gasolina', -80.00,'Carro', '2016-05-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2016-05-08')," +
                "('Conta de Água', -56.80, 'Água', '2016-05-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2016-05-08')," +
                "('Conta Internet', -50.00, 'Internet', '2016-05-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2016-05-10')," +
                "('Pão de Açúcar', -239.00, 'Alimentos', '2016-05-12')," +
                "('Carregador novo', -65.00,'Gastos Pessoais', '2016-05-15')," +
                "('Cinema', -45.00,'Entretenimento', '2016-05-20')," +
                "('Outback', -250.00, 'Gastos Pessoais', '2016-05-28')," +

                "('Comper', -55.00, 'Alimentos', '2016-06-03')," +
                "('Salário', 3900.00, 'Emprego', '2016-06-05')," +
                "('Gasolina', -80.00,'Carro', '2016-06-07')," +
                "('Conta de Luz', -66.76, 'Luz', '2016-06-08')," +
                "('Conta de Água', -56.80, 'Água', '2016-06-08')," +
                "('Conta Telefone', -36.90, 'Telefone', '2016-06-08')," +
                "('Conta Internet', -50.00, 'Internet', '2016-06-10')," +
                "('Plano de Saude', -120.00, 'Saúde', '2016-06-10')," +
                "('Pão de Açúcar', -250.00, 'Alimentos', '2016-06-12')," +
                "('Origin', -90.00,'Gastos Pessoais', '2016-06-15')," +
                "('Cinema', -45.00,'Entretenimento', '2016-06-20')," +
                "('Outback', -280.00, 'Gastos Pessoais', '2016-06-28')"

            );
            
            mostraEntrada();
            mostraCategoria();
            desenhaGrafico();
        });

    } 

    else {
        
        alert("deu merda");
    
    }

}