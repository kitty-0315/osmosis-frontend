import { FunctionComponent } from "react";
import classNames from "classnames";
import { Dec, IntPretty, PricePretty } from "@keplr-wallet/unit";

const ColorCycle = [
  "bg-osmoverse-300",
  "bg-osmoverse-600",
  "bg-bullish-600",
  "bg-ammelia-600",
];

export const PriceBreakdownChart: FunctionComponent<{
  prices: { label: string; price: PricePretty }[];
  colorCycle?: typeof ColorCycle;
}> = ({ prices, colorCycle = ColorCycle }) => {
  const totalWeight = prices.reduce(
    (sum, { price }) => sum.add(price),
    new IntPretty(0)
  );

  if (totalWeight.toDec().isZero()) return null;

  const positivePrices = prices.filter(({ price }) => !price.toDec().isZero());

  const assetPercentages = positivePrices.map(({ price }) =>
    price.quo(totalWeight).mul(new Dec(100))
  );
  const gridTemplateColumns = positivePrices.map(
    (_, index) =>
      `${assetPercentages?.[index].toDec().round().toString() ?? "0"}fr`
  );

  return (
    <div
      className={classNames("grid h-full w-full")}
      style={{
        gridTemplateColumns: gridTemplateColumns.join(" "),
      }}
    >
      {positivePrices.map(({ price, label }, index, array) => {
        const percentage = assetPercentages?.[index];
        const isLast = index === array.length - 1;

        if (!percentage) return null;

        return (
          <div
            key={index}
            className={classNames(
              "flex h-full flex-col justify-evenly gap-2.5"
            )}
          >
            <div
              className={classNames("space-y-2 whitespace-nowrap", {
                "text-right": isLast,
              })}
            >
              <span className="body2 text-osmoverse-400">{label}</span>
              <h5 className="body1 text-osmoverse-100">
                {price.maxDecimals(0).toString()}
              </h5>
            </div>
            <div
              className={classNames(
                "flex h-2 w-full",
                colorCycle[index % colorCycle.length],
                {
                  "rounded-l-full": index === 0,
                  "rounded-r-full":
                    positivePrices.length === 1 ||
                    index === positivePrices.length - 1,
                }
              )}
            />
          </div>
        );
      })}
    </div>
  );
};
