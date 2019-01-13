import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.product.auction{
   export enum ListingState {
      FOR_SALE,
      RESERVE_NOT_MET,
      SOLD,
   }
   export class Product extends Asset {
      productId: string;
      description: string;
      owner: User;
   }
   export class ProductListing extends Asset {
      listingId: string;
      reservePrice: number;
      state: ListingState;
      offers: Offer[];
      product: Product;
   }
   export abstract class User extends Participant {
      email: string;
      balance: number;
      products: Product[];
   }
   export class Seller extends User {
      organisation: string;
   }
   export class Member extends User {
      firstName: string;
      lastName: string;
   }
   export class Offer extends Transaction {
      bidPrice: number;
      listing: ProductListing;
      member: User;
   }
   export class CloseBidding extends Transaction {
      listing: ProductListing;
   }
   export class StartBidding extends Transaction {
      listingId: string;
      reservePrice: number;
      product: Product;
   }
   export class AddProduct extends Transaction {
      productId: string;
      description: string;
      owner: Seller;
   }
// }
