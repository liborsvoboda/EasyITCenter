namespace EasyITCenter.DBModel {

    /// <summary>
    /// Database response types definition
    /// </summary>
    public enum DBResult {
        success,
        error,
        DeniedYouAreNotAdmin,
        UnauthorizedRequest
    }

    /// <summary>
    /// The DB result message.
    /// </summary>
    public class DBResultMessage {

        /// <summary>
        /// Gets or Sets the inserted id.
        /// </summary>
        public int InsertedId { get; set; } = 0;

        /// <summary>
        /// Gets or Sets the status.
        /// </summary>
        public string Status { get; set; }

        /// <summary>
        /// Gets or Sets the record count.
        /// </summary>
        public int RecordCount { get; set; }

        /// <summary>
        /// Gets or Sets the error message.
        /// </summary>
        public string ErrorMessage { get; set; }
    }

    /// <summary>
    /// The authenticate response.
    /// </summary>
    public class AuthenticateResponse {

        /// <summary>
        /// Gets or Sets the id.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or Sets the name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets the surname.
        /// </summary>
        public string Surname { get; set; }

        /// <summary>
        /// Gets or Sets the token.
        /// </summary>
        public string Token { get; set; }

        /// <summary>
        /// Gets or Sets the expiration.
        /// </summary>
        public DateTime? Expiration { get; set; }

        /// <summary>
        /// Gets or Sets the role.
        /// </summary>
        public string Role { get; set; }
    }
}