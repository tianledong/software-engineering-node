import Tuit from "../models/tuits/Tuit";

/**
 * @file Declares API for Tuits related data access object methods
 */
export default interface TuitDaoI {
    findAllTuits(): Promise<Tuit[]>;

    findTuitsByUser(uid: string): Promise<Tuit[]>;

    findTuitById(tid: string): Promise<Tuit>;

    createTuit(tuit: Tuit): Promise<Tuit>;

    updateTuit(tid: string, tuit: Tuit): Promise<any>;

    deleteTuit(tid: string): Promise<any>;

    createTuitByUser(uid: string, tuit: Tuit): Promise<Tuit>;
}
