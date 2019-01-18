SELECT COUNT(*)
FROM usairlineflights.flights;


SELECT AVG(DepDelay),Origin
FROM usairlineflights.flights
GROUP BY Origin;

SELECT AVG(ArrDelay),Origin
FROM usairlineflights.flights
GROUP BY Origin;

SELECT Origin, Year, Month, AVG(ArrDelay) Average
FROM usairlineflights.flights
GROUP BY Origin, Year, Month
ORDER BY  Origin, Year , Month ASC;

SELECT a.city, f.Year, f.Month, AVG(f.ArrDelay) Average
FROM usairlineflights.flights f
INNER JOIN usairlineflights.airports a on a.iata = f.Origin
GROUP BY a.city, f.Year, f.Month
ORDER BY  a.city, f.Year, f.Month ASC;


SELECT a.Description, SUM(f.Cancelled) cancelled
FROM usairlineflights.flights f
INNER JOIN usairlineflights.carriers a on f.UniqueCarrier = a.Code
GROUP BY a.Description
ORDER BY cancelled DESC;

SELECT FlightNum, MAX(Distance) 
FROM usairlineflights.flights
GROUP BY FlightNum, Distance
ORDER BY Distance DESC
LIMIT 10;

SELECT  a.Description, f.ArrDelay
FROM usairlineflights.flights f
INNER JOIN usairlineflights.carriers a on f.UniqueCarrier = a.Code
WHERE f.ArrDelay > 10
GROUP BY a.Description, f.ArrDelay
ORDER BY f.ArrDelay DESC;
