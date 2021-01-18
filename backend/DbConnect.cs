using System;
using Npgsql;

namespace Driver
{
    public class DbConnect
    {
        private static string Host = "";
        private static string User = "";
        private static string DBname = "";
        private static string Password = "";
        private static string Port = "";

        static void Main(string[] args)
        {
            string connString =
                String.Format(
                    "Server={0};Username={1};Database={2};Port={3};Password={4};SSLMode=Prefer",
                    Host,
                    User,
                    DBname,
                    Password,
                    Port,
                );

            using (var conn = new NpgsqlConnection(connString))
            {
            }
        }
    }
}