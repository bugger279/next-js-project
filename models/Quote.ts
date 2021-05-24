import mongoose, { Document } from 'mongoose';
import { IQuote } from '@libs/types';
type QuoteDocument = Document & IQuote;

const QuoteSchema = new mongoose.Schema<QuoteDocument>({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    pictureURL: {
        type: String,
        required: true
    }
});

export default (mongoose.models.Quote as mongoose.Model<QuoteDocument>) || mongoose.model<QuoteDocument>('Quote', QuoteSchema);