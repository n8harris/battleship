import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Game } from '.'

export const create = ({ body }, res, next) =>
  success(res, 201)({ message: "battleship"});
