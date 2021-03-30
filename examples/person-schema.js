{
  "$id": "https://example.com/person.schema.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Person",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "givenName": {
      "type": "string",
      "description": "The person's first name."
    },
    "familyName": {
      "type": "string",
      "description": "The person's last name."
    },
    "age": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "integer",
      "minimum": 0
    },
    "_nvp": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/_nvp"
      },
      "description": "List of name/value pairs."
    }
  },
  "$defs": {
    "_nvp": {
      "type": "object",
      "required": [
        "name",
        "value"
      ],
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the property."
        },
        "value": {
          "type": [
            "number",
            "string",
            "boolean",
            "object",
            "array",
            "null"
          ],
          "description": "The value of the property."
        }
      }
    }
  }
}
