using db as sample from '../db/schema';

service MyService {
    @odata.draft.enabled
    entity company as projection on sample.company;
}
