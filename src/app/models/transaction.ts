export class TransactionDto {
    originDocumentId!: string | null;
    destinationDocumentId!: string | null;
    originBankId!: string | null;
    destinationBankId!: string | null;
    amount!: number;
}