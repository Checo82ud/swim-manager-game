import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/race", async (req, res) => {
  const { competition, discipline, distance, athleteName, time } = req.body;
  const result = await prisma.raceResult.create({
    data: { competition, discipline, distance, athleteName, time },
  });
  res.json(result);
});

router.post("/relay", async (req, res) => {
  const { competition, relayName, totalTime, athleteNames } = req.body;
  const result = await prisma.relayResult.create({
    data: {
      competition,
      relayName,
      totalTime,
      athleteNames: athleteNames.join(","),
    },
  });
  res.json(result);
});

export default router;