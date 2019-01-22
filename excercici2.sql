SELECT COUNT(*)
FROM usairlineflights.flights;

SELECT AVG(DepDelay), AVG(ArrDelay),Origin
FROM usairlineflights.flights
GROUP BY Origin;

SELECT Origin, Year, Month, AVG(ArrDelay) Average
FROM usairlineflights.flights
GROUP BY Origin, Year, Month
ORDER BY  Origin, Year , Month ASC;

SELECT b.city, a.Year, a.Month, AVG(a.ArrDelay) Average
FROM usairlineflights.flights a
LEFT JOIN usairlineflights.airports b on b.iata = a.Origin
GROUP BY b.city, a.Year, a.Month
ORDER BY  b.city, a.Year, a.Month ASC;

SELECT b.Description, COUNT(*) cancelled
FROM usairlineflights.flights a
LEFT JOIN usairlineflights.carriers b on a.UniqueCarrier = b.Code
WHERE a.Cancelled > 0
GROUP BY b.Description
ORDER BY cancelled DESC;

SELECT FlightNum, TailNum, SUM(Distance) 
FROM usairlineflights.flights
GROUP BY FlightNum, TailNum, Distance
ORDER BY Distance DESC
LIMIT 10;

SELECT b.Description, COUNT( a.ArrDelay) Delay
FROM usairlineflights.flights a
LEFT JOIN usairlineflights.carriers b on a.UniqueCarrier = b.Code
GROUP BY b.Description
HAVING COUNT(a.ArrDelay) > 10
ORDER BY Delay DESC;
