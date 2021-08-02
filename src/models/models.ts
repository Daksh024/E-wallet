import { model , Schema } from 'mongoose';

interface spendStructure {
    month : string;
    year : number;
    spendOn : string;
    amount : number;
    currency ?: string;
    date ?: Date;
}

const spendRecord = new Schema<spendStructure>({
    month: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    spendOn: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    currency: {
        type: String,
        default: "INR"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const spendModel = model<spendStructure>('moneyspend',spendRecord);

export {spendModel};