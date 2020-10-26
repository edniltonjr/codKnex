import {Request, Response} from 'express'
import { stat } from 'fs-extra';
import knex from '../../database/connection';

class BuscaAdesaoController {


 
    async buscaAde (request: Request, response: Response) {

        const adesao = request.query.adesao;


        if (adesao === undefined) {
            return response.status(400).json({error: 'adesao é um parametro obrigatorio'})
        }

        const items = await knex('registro_crm').select('id', 'adesao', 'operacao', 'produto', 'n_beneficio', 'data_venda',
         'tipo_conta', 'cod_agencia', 'cod_cc', 'prazo', 'parcela', 'valor_venda', 'valor_seguro', 'operador_venda', 'obs_venda', 'status_venda', 'supervisor').where({adesao: adesao });
      
        if (items.length === 0) {
            return response.status(404).json({error: 'Nº de Adesão não econtrado!'})
        }

        const serializedItems = items.map(adesao => {
          return {
            id: adesao.id,
            adesao: adesao.adesao,
            operacao: adesao.operacao,
            produto: adesao.produto,
            beneficio: adesao.n_beneficio,
            dt_lancamento: adesao.data_venda,
            banco: adesao.banco,
            tipo_cc: adesao.tipo_conta,
            agencia: adesao.cod_agencia,
            conta: adesao.cod_cc,
            prazo: adesao.prazo, 
            parcela: adesao.parcela,
            valor_venda: adesao.valor_venda, 
            valor_seguro: adesao.valor_seguro, 
            operador_venda: adesao.operador_venda,
            obs_venda: adesao.obs_venda,
            supervisor: adesao.supervisor,
            status: adesao.status_venda
          }
        })

        
      
        return response.json(serializedItems);
      }


      async buscaAdesoes (request: Request, response: Response) {

        const {supervisor, operacao, status, page = 1} = request.query;



        if (operacao === 'TODOS' || supervisor === 'TODOS' || status === 'TODOS') {

          console.log(supervisor, operacao, status)


          const items = await knex('registro_crm').select('id', 'adesao', 'operacao', 'produto', 'n_beneficio', 'data_venda',
          'tipo_conta', 'cod_agencia', 'cod_cc', 'prazo', 'parcela', 'valor_venda', 'valor_seguro', 'operador_venda', 'obs_venda', 'status_venda', 'supervisor')
          .limit(10).offset((page as number - 1) * 10);
 
         const serializedItems = items.map(adesao => {
           return {
             id: adesao.id,
             adesao: adesao.adesao,
             operacao: adesao.operacao,
             produto: adesao.produto,
             beneficio: adesao.n_beneficio,
             dt_lancamento: adesao.data_venda,
             banco: adesao.banco,
             tipo_cc: adesao.tipo_conta,
             agencia: adesao.cod_agencia,
             conta: adesao.cod_cc,
             prazo: adesao.prazo, 
             parcela: adesao.parcela,
             valor_venda: adesao.valor_venda, 
             valor_seguro: adesao.valor_seguro, 
             operador_venda: adesao.operador_venda,
             obs_venda: adesao.obs_venda,
             supervisor: adesao.supervisor,
             status: adesao.status_venda
           }
         })
         return response.json(serializedItems);
          }

          if (operacao === 'TODOS' || supervisor === 'TODOS') {

            const items = await knex('registro_crm').select('id', 'adesao', 'operacao', 'produto', 'n_beneficio', 'data_venda',
            'tipo_conta', 'cod_agencia', 'cod_cc', 'prazo', 'parcela', 'valor_venda', 'valor_seguro', 'operador_venda', 'obs_venda', 'status_venda', 'supervisor')
            .andWhere({status_venda: status}).limit(10).offset((page as number - 1) * 10);;
 
         const serializedItems = items.map(adesao => {
           return {
             id: adesao.id,
             adesao: adesao.adesao,
             operacao: adesao.operacao,
             produto: adesao.produto,
             beneficio: adesao.n_beneficio,
             dt_lancamento: adesao.data_venda,
             banco: adesao.banco,
             tipo_cc: adesao.tipo_conta,
             agencia: adesao.cod_agencia,
             conta: adesao.cod_cc,
             prazo: adesao.prazo, 
             parcela: adesao.parcela,
             valor_venda: adesao.valor_venda, 
             valor_seguro: adesao.valor_seguro, 
             operador_venda: adesao.operador_venda,
             obs_venda: adesao.obs_venda,
             supervisor: adesao.supervisor,
             status: adesao.status_venda
           }
         })
         return response.json(serializedItems);
          

          }

          if (operacao === 'TODOS' || status === 'TODOS') {


            const items = await knex('registro_crm').select('id', 'adesao', 'operacao', 'produto', 'n_beneficio', 'data_venda',
            'tipo_conta', 'cod_agencia', 'cod_cc', 'prazo', 'parcela', 'valor_venda', 'valor_seguro', 'operador_venda', 'obs_venda', 'status_venda', 'supervisor')
            .andWhere({supervisor: supervisor}).limit(10).offset((page as number - 1) * 10);
 
         const serializedItems = items.map(adesao => {
           return {
             id: adesao.id,
             adesao: adesao.adesao,
             operacao: adesao.operacao,
             produto: adesao.produto,
             beneficio: adesao.n_beneficio,
             dt_lancamento: adesao.data_venda,
             banco: adesao.banco,
             tipo_cc: adesao.tipo_conta,
             agencia: adesao.cod_agencia,
             conta: adesao.cod_cc,
             prazo: adesao.prazo, 
             parcela: adesao.parcela,
             valor_venda: adesao.valor_venda, 
             valor_seguro: adesao.valor_seguro, 
             operador_venda: adesao.operador_venda,
             obs_venda: adesao.obs_venda,
             supervisor: adesao.supervisor,
             status: adesao.status_venda
           }
         })
         return response.json(serializedItems);
            
          }

          if (supervisor === 'TODOS' || status === 'TODOS') {

            const items = await knex('registro_crm').select('id', 'adesao', 'operacao', 'produto', 'n_beneficio', 'data_venda',
            'tipo_conta', 'cod_agencia', 'cod_cc', 'prazo', 'parcela', 'valor_venda', 'valor_seguro', 'operador_venda', 'obs_venda', 'status_venda', 'supervisor')
            .andWhere({operacao: operacao}).limit(10).offset((page as number - 1) * 10);
 
         const serializedItems = items.map(adesao => {
           return {
             id: adesao.id,
             adesao: adesao.adesao,
             operacao: adesao.operacao,
             produto: adesao.produto,
             beneficio: adesao.n_beneficio,
             dt_lancamento: adesao.data_venda,
             banco: adesao.banco,
             tipo_cc: adesao.tipo_conta,
             agencia: adesao.cod_agencia,
             conta: adesao.cod_cc,
             prazo: adesao.prazo, 
             parcela: adesao.parcela,
             valor_venda: adesao.valor_venda, 
             valor_seguro: adesao.valor_seguro, 
             operador_venda: adesao.operador_venda,
             obs_venda: adesao.obs_venda,
             supervisor: adesao.supervisor,
             status: adesao.status_venda
           }
         })
         return response.json(serializedItems);
            
          }


        if (operacao === 'TODOS') {

            const items = await knex('registro_crm').select('id', 'adesao', 'operacao', 'produto', 'n_beneficio', 'data_venda',
         'tipo_conta', 'cod_agencia', 'cod_cc', 'prazo', 'parcela', 'valor_venda', 'valor_seguro', 'operador_venda', 'obs_venda', 'status_venda', 'supervisor')
         .andWhere({supervisor: supervisor}).andWhere({status_venda: status}).limit(10).offset((page as number - 1) * 10);;

        const serializedItems = items.map(adesao => {
          return {
            id: adesao.id,
            adesao: adesao.adesao,
            operacao: adesao.operacao,
            produto: adesao.produto,
            beneficio: adesao.n_beneficio,
            dt_lancamento: adesao.data_venda,
            banco: adesao.banco,
            tipo_cc: adesao.tipo_conta,
            agencia: adesao.cod_agencia,
            conta: adesao.cod_cc,
            prazo: adesao.prazo, 
            parcela: adesao.parcela,
            valor_venda: adesao.valor_venda, 
            valor_seguro: adesao.valor_seguro, 
            operador_venda: adesao.operador_venda,
            obs_venda: adesao.obs_venda,
            supervisor: adesao.supervisor,
            status: adesao.status_venda
          }
        })
        return response.json(serializedItems);
        }

        if (supervisor === 'TODOS') {
            const items = await knex('registro_crm').select('id', 'adesao', 'operacao', 'produto', 'n_beneficio', 'data_venda',
         'tipo_conta', 'cod_agencia', 'cod_cc', 'prazo', 'parcela', 'valor_venda', 'valor_seguro', 'operador_venda', 'obs_venda', 'status_venda', 'supervisor').where({operacao: operacao })
         .andWhere({status_venda: status}).limit(10).offset((page as number - 1) * 10);;

        const serializedItems = items.map(adesao => {
          return {
            id: adesao.id,
            adesao: adesao.adesao,
            operacao: adesao.operacao,
            produto: adesao.produto,
            beneficio: adesao.n_beneficio,
            dt_lancamento: adesao.data_venda,
            banco: adesao.banco,
            tipo_cc: adesao.tipo_conta,
            agencia: adesao.cod_agencia,
            conta: adesao.cod_cc,
            prazo: adesao.prazo, 
            parcela: adesao.parcela,
            valor_venda: adesao.valor_venda, 
            valor_seguro: adesao.valor_seguro, 
            operador_venda: adesao.operador_venda,
            obs_venda: adesao.obs_venda,
            supervisor: adesao.supervisor,
            status: adesao.status_venda
          }
        })

        
      
        return response.json(serializedItems);
        }


        if(status === 'TODOS') {
            const items = await knex('registro_crm').select('id', 'adesao', 'operacao', 'produto', 'n_beneficio', 'data_venda',
         'tipo_conta', 'cod_agencia', 'cod_cc', 'prazo', 'parcela', 'valor_venda', 'valor_seguro', 'operador_venda', 'obs_venda', 'status_venda', 'supervisor').where({operacao: operacao })
         .andWhere({supervisor: supervisor}).limit(10).offset((page as number - 1) * 10);;

        const serializedItems = items.map(adesao => {
          return {
            id: adesao.id,
            adesao: adesao.adesao,
            operacao: adesao.operacao,
            produto: adesao.produto,
            beneficio: adesao.n_beneficio,
            dt_lancamento: adesao.data_venda,
            banco: adesao.banco,
            tipo_cc: adesao.tipo_conta,
            agencia: adesao.cod_agencia,
            conta: adesao.cod_cc,
            prazo: adesao.prazo, 
            parcela: adesao.parcela,
            valor_venda: adesao.valor_venda, 
            valor_seguro: adesao.valor_seguro, 
            operador_venda: adesao.operador_venda,
            obs_venda: adesao.obs_venda,
            supervisor: adesao.supervisor,
            status: adesao.status_venda
          }
        })

        
      
        return response.json(serializedItems);
        }



      


        const items = await knex('registro_crm').select('id', 'adesao', 'operacao', 'produto', 'n_beneficio', 'data_venda',
         'tipo_conta', 'cod_agencia', 'cod_cc', 'prazo', 'parcela', 'valor_venda', 'valor_seguro', 'operador_venda', 'obs_venda', 'status_venda', 'supervisor').where({operacao: operacao })
         .andWhere({supervisor: supervisor}).andWhere({status_venda: status}).limit(10).offset((page as number - 1) * 10);;

        const serializedItems = items.map(adesao => {
          return {
            id: adesao.id,
            adesao: adesao.adesao,
            operacao: adesao.operacao,
            produto: adesao.produto,
            beneficio: adesao.n_beneficio,
            dt_lancamento: adesao.data_venda,
            banco: adesao.banco,
            tipo_cc: adesao.tipo_conta,
            agencia: adesao.cod_agencia,
            conta: adesao.cod_cc,
            prazo: adesao.prazo, 
            parcela: adesao.parcela,
            valor_venda: adesao.valor_venda, 
            valor_seguro: adesao.valor_seguro, 
            operador_venda: adesao.operador_venda,
            obs_venda: adesao.obs_venda,
            supervisor: adesao.supervisor,
            status: adesao.status_venda
          }
        })

        
      
        return response.json(serializedItems);
      }
    
  
  }




export default BuscaAdesaoController;