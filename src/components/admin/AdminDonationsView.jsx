import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const AdminDonationsView = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/user/donations",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch donations");
        }

        const data = await response.json();
        console.log(data);

        setDonations(data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, []);

  const names = donations.map((donation) => donation.firstName);
  const emails = donations.map((donation) => donation.email);
  const amounts = donations.map((donation) =>
    parseFloat(donation.total_donated)
  );

  const donationsTotal = amounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <section className="w-full h-fit flex flex-col gap-10">
      <h5 className="text-4xl font-bold">Dashboard Overview</h5>
      <div className="grid grid-cols-5 grid-rows-6 gap-4">
        <div className="col-span-2 row-span-3 bg-gray-100 rounded-lg p-5">
          <p className="text-2xl font-medium">Donations</p>
          <p className="text-4xl">${donationsTotal.toFixed(2)}</p>
        </div>
        <div className="col-span-2 row-span-3 col-start-1 row-start-4 bg-gray-100 rounded-lg p-5">
          <p className="text-2xl font-medium">Average</p>
          <p className="text-4xl">
            ${(donationsTotal / donations.length).toFixed(2)}
          </p>
        </div>
        <div className="flex justify-center items-center col-span-3 row-span-6 col-start-3 row-start-1 bg-gray-100 rounded-lg p-5">
          <Stack direction="row">
            <LineChart
              width={500}
              height={300}
              series={[
                {
                  data: amounts,
                  label: "Amount Donated",
                },
              ]}
              xAxis={[{ scaleType: "point", data: names }]}
              yAxis={[{ label: "Amount ($)", scaleType: "linear" }]}
            />
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default AdminDonationsView;
