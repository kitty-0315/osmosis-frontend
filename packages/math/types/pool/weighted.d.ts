import { Dec, Int } from "@keplr-wallet/unit";
export declare function calcPriceImpactTokenIn(spotPriceBefore: Dec, tokenIn: Int, priceImpact: Dec): Int;
export declare function calcPriceImpactTokenOut(spotPriceBefore: Dec, tokenOut: Int, priceImpact: Dec): Int;
export declare function calcPriceImpactSlope(tokenBalanceIn: Dec, tokenWeightIn: Dec, tokenWeightOut: Dec, swapFee: Dec): Dec;
export declare function calcSpotPrice(tokenBalanceIn: Dec, tokenWeightIn: Dec, tokenBalanceOut: Dec, tokenWeightOut: Dec, swapFee: Dec): Dec;
export declare function calcOutGivenIn(tokenBalanceIn: Dec, tokenWeightIn: Dec, tokenBalanceOut: Dec, tokenWeightOut: Dec, tokenAmountIn: Dec, swapFee: Dec): Dec;
export declare function calcInGivenOut(tokenBalanceIn: Dec, tokenWeightIn: Dec, tokenBalanceOut: Dec, tokenWeightOut: Dec, tokenAmountOut: Dec, swapFee: Dec): Dec;
export declare function calcPoolOutGivenSingleIn(tokenBalanceIn: Dec, tokenWeightIn: Dec, poolSupply: Dec, totalWeight: Dec, tokenAmountIn: Dec, swapFee: Dec): Dec;
export declare function calcSingleInGivenPoolOut(tokenBalanceIn: Dec, tokenWeightIn: Dec, poolSupply: Dec, totalWeight: Dec, poolAmountOut: Dec, swapFee: Dec): Dec;
export declare function calcSingleOutGivenPoolIn(tokenBalanceOut: Dec, tokenWeightOut: Dec, poolSupply: Dec, totalWeight: Dec, poolAmountIn: Dec, swapFee: Dec): Dec;
export declare function calcPoolInGivenSingleOut(tokenBalanceOut: Dec, tokenWeightOut: Dec, poolSupply: Dec, totalWeight: Dec, tokenAmountOut: Dec, swapFee: Dec): Dec;
